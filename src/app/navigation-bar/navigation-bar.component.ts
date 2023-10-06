import { Component, Renderer2,ElementRef, HostListener,OnInit  } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit{

  activeSection: string | null = null;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router
    ) {}

    ngOnInit(): void {
  
    }



   

  isSidebarOpen = false;

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar-left');
    const overlay = document.querySelector('.overlay-left');

    if (sidebar && overlay) {
      this.isSidebarOpen = !this.isSidebarOpen;

      // Toggle classes to show/hide sidebar and overlay
      if (this.isSidebarOpen) {
        this.renderer.addClass(sidebar, 'open');
        this.renderer.addClass(overlay, 'open');
      } else {
        this.renderer.removeClass(sidebar, 'open');
        this.renderer.removeClass(overlay, 'open');
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // Check if the click event occurred outside of the sidebar and overlay
    const sidebar = document.querySelector('.sidebar-left');
    if (sidebar) {
      if (
        !this.el.nativeElement.contains(event.target as Node) &&
        !sidebar.contains(event.target as Node)
      ) {
        this.isSidebarOpen = false;
  
        // Hide the sidebar and overlay
        const overlay = document.querySelector('.overlay-left');
        if (overlay) {
          this.renderer.removeClass(sidebar, 'open');
          this.renderer.removeClass(overlay, 'open');
        }
      }
    }
  }
  

}
