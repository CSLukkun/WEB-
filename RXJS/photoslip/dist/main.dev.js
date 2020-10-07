// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';
// var imgList = document.getElementsByTagName('img');
// var movePos = Observable.fromEvent(document, 'mousemove')
// .map(e => ({ x: e.clientX, y: e.clientY }))
// function followMouse(DOMArr) {
//   const delayTime = 60;
//   DOMArr.forEach((item, index) => {
//     movePos
//       .delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2)
//       .subscribe(function (pos){
//         item.style.transform = 'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
//       });
//   });
// }
// followMouse(Array.from(imgList))
"use strict";