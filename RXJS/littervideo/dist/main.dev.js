

var _Rx = _interopRequireDefault(require("../node_modules/rxjs/Rx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }


var video = document.getElementById('video');
var anchor = document.getElementById('anchor');

var scroll = _Rx["default"].Observable.fromEvent(document, 'scroll');

var mouseDown = _Rx["default"].Observable.fromEvent(video, 'mousedown');

var mouseUp = _Rx["default"].Observable.fromEvent(document, 'mouseup');

var mouseMove = _Rx["default"].Observable.fromEvent(document, 'mousemove');

var validValue = function validValue(value, max, min) {
  return Math.min(Math.max(value, min), max);
};

scroll.map(function (e) {
  return anchor.getBoundingClientRect().bottom < 0;
}).subscribe(function (bool) {
  if (bool) {
    video.classList.add('video-fixed');
  } else {
    video.classList.remove('video-fixed');
  }
});
mouseDown.filter(function (e) {
  return video.classList.contains('video-fixed');
}).map(function (e) {
  return mouseMove.takeUntil(mouseUp);
}).concatAll().withLatestFrom(mouseDown, function (move, down) {
  return {
    x: validValue(move.clientX - down.offsetX, window.innerWidth - 320, 0),
    y: validValue(move.clientY - down.offsetY, window.innerHeight - 180, 0)
  };
}).subscribe(function (pos) {
  video.style.top = pos.y + 'px';
  video.style.left = pos.x + 'px';
});