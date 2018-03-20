import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appOrangeColor]'
})
export class OrangeColorDirective implements OnInit{


  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "orange");
    this.renderer.setStyle(this.elementRef.nativeElement, "width", "300px");
    this.renderer.setStyle(this.elementRef.nativeElement, "height", "300px");

    this.renderer.setStyle(this.elementRef.nativeElement, "color", "red")
  }
  constructor( private elementRef: ElementRef, private renderer: Renderer2) {

  }
  @HostListener('mouseover') over() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') leave() {
    this.highlight('red');
  }
  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
