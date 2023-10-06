// scroll-top-button.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.css']
})
export class ScrollTopButtonComponent {
  showScrollButton = false;

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 200) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }
}
