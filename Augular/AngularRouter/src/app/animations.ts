import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';


// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [//定义触发器
    transition('heroes <=> hero', [//heroes和hero之间来回切换
      style({ position: 'relative' }),
      // :enter 和 :leave 分别是 void => * 和 *
      //  => void 的别名。 这些别名供多个动画函数使用。
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      // query() 函数允许你查找正在播放动画的元素内部的元素
      group([//指定要并行运行的一组动画步骤（内部动画）
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
      // 在一个动画序列中执行一个查询到的内部动画元素。
    ])
  ]);
