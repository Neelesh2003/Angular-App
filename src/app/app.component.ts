import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Neelesh Gupta';

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const sections = this.elRef.nativeElement.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
        } else {
          this.renderer.removeClass(entry.target, 'visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach((section: Element) => observer.observe(section));
  }
}
