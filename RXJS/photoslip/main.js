

var imgList = document.getElementsByTagName('img');

var movePos = Rx.Observable.fromEvent(document, 'mousemove')
.map(e => ({ x: e.clientX-15, y: e.clientY-15 }))

function followMouse(DOMArr) {
  const delayTime = 600;
  DOMArr.forEach((item, index) => {
    movePos
      .delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2)
      .subscribe(function (pos){
        item.style.transform = 'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
      });
  });
}

followMouse(Array.from(imgList))
