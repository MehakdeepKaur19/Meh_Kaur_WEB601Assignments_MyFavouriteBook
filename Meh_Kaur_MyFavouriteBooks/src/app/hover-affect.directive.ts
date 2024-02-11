import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input('appHoverAffect') affectType: string | undefined; // Input to specify the type of affect (underline, bold, border)

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('Hover-Affect Directive Applied:', el.nativeElement);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyAffect(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyAffect(false);
  }

  public applyAffect(isHovered: boolean): void {
    switch (this.affectType) {
      case 'underline':
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', isHovered ? 'underline' : 'none');
        break;
      case 'bold':
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', isHovered ? 'bold' : 'normal');
        break;
      case 'border':
        const parentElement = this.el.nativeElement.parentElement;
        const isFirstOrLast = parentElement && (
          parentElement.firstElementChild === this.el.nativeElement ||
          parentElement.lastElementChild === this.el.nativeElement
        );
        this.renderer.setStyle(this.el.nativeElement, 'border', isHovered && isFirstOrLast ? '2px solid red' : 'none');
        break;
      default:
        break;
    }
  }
}
