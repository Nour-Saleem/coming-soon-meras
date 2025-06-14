import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '.animate-section'
})
export class AnimateOnScrollDirective implements OnInit {
  private observer!: IntersectionObserver; // 👈 notice the non-null assertion operator "!"

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.el.nativeElement, 'animate-fadeInUp');
        this.observer.unobserve(this.el.nativeElement);
      }
    }, { threshold: 0.3 });

    this.observer.observe(this.el.nativeElement);
  }
}
