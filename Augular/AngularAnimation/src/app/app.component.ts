import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,group,
  keyframes, query, animateChild, animation
} from '@angular/animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [//第一个参数声明唯一的触发器名称.
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('queryAnimation', [
      state('in', style({ opacity: 1 })),
      // 入场的时候对子元素采用动画
      transition('* => goAnimate', [
        // hide the inner elements
        query('h1', style({
          opacity: 0
        })),
        query('.content', style({
          opacity: 0
        })),
        // 动画作用于内容元素
        query('h1', animate(1000, style({
          opacity: 1
        }))),
        query('.content', animate(1000, style({
          opacity: 1
        })))
      ])
    ]), trigger('parentAnimation', [
      transition('false => true', [
        // 查找parentAnimation对应element里面的header标签执行动画
        query('header', [
          style({ opacity: 0 }),
          animate(500, style({ opacity: 1 }))
        ]),
        query('@childAnimation', [
          animateChild()
        ])
        //防止子动画被阻止.
      ])
    ]),
    trigger('childAnimation', [
      transition('false => true', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])/*,
  useAnimation(fadeAnimation, {
      params: {
          time: '2s',
          start: 1,
          end: 0
      }
  })*/
    ]),
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0) scale(1)' })),
      // 进场动画
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-100%) scale(0)' }),
        animate(500)
      ]),
      // 出场动画
      transition('* => void', [
        animate(500, style({ opacity: 0, transform: 'translateX(100%) scale(0)' }))
      ])
    ]),
    trigger('group',[
      state('in',style({
        width:'12px',transform:'rotateX(0) translateX(0)',opacity:1
      })),
      transition('* => *', [
        // 动画开始时候的样式
        style({transform: 'rotateX(0) rotateY(0) translateX(-100%) translateY(-100%)', opacity: 0}),
        group([
            // 两个动画同时执行
            animate('2s 0.1s ease', style({
                transform: 'rotateX(180deg) rotateY(180deg) translateX(0) translateY(0)',
            })),
            animate('2s ease', style({
                opacity: 1
            })),
            group([
                // 两个动画同时执行
                animate('2s 0.1s ease', style({
                    backgroundColor: 'blue',
                }))
            ])
        ])
      ])
  ])
  ],


})
export class AppComponent {
  isOpen = true;
  title: any;
  toggle() {
    this.isOpen = !this.isOpen
  }
  exp = false;

  fadeAnimation = animation([
    style({ opacity: '{{ start }}' }),
    animate('{{ time }}',
      style({ opacity: '{{ end }}' })
    )
  ], { params: { time: '1000ms', start: 0, end: 1 } });
  show = true;
  list = ['第一个item', '第一个item', '第一个item'];
  onEnterOuterSwitch() {
    this.show = !this.show;
  }

  constructor() {
  }

  ngOnInit() {
  }


}
