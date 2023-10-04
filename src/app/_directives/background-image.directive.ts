import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective implements OnInit {
  @Input() appBackgroundImage?: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appBackgroundImage) {
      this.renderer.setStyle(this.el.nativeElement, 'background-image', `url('${this.appBackgroundImage}')`);
      this.renderer.setStyle(this.el.nativeElement, 'background-size', 'cover');
      this.renderer.setStyle(this.el.nativeElement, 'background-repeat', 'no-repeat');
    }
  }
}
