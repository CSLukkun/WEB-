import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  constructor(private el: ElementRef) {//ElementRef注入宿主Dom元素;这里的el同样需要声明为private

  }
  @Input('appHighlight') highlightColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null)
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
