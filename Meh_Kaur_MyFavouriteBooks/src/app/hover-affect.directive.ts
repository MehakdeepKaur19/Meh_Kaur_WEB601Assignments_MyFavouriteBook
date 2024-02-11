// hover-affect.directive.ts
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    const style = this.el.nativeElement.getAttribute('appHoverAffect');
    if (style.includes('underline')) {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    }
    if (style.includes('bold')) {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
    if (style.includes('border')) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    const style = this.el.nativeElement.getAttribute('appHoverAffect');
    if (style.includes('underline')) {
      this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
    }
    if (style.includes('bold')) {
      this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
    }
    if (style.includes('border')) {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
  }
}