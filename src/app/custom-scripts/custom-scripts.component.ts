import { Component, OnInit } from '@angular/core';

declare const GLightbox: any; // Declare GLightbox to avoid TypeScript errors

@Component({
  selector: 'app-custom-scripts',
  templateUrl: './custom-scripts.component.html',
  styleUrls: ['./custom-scripts.component.css']
})
export class CustomScriptsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    //===== close navbar-collapse when a clicked
    let navbarTogglerNine:any = document.querySelector(".navbar-nine .navbar-toggler") ;
    if (navbarTogglerNine) {
      navbarTogglerNine.addEventListener("click", function () {
        navbarTogglerNine.classList.toggle("active");
      });
    }
  
    // ==== left sidebar toggle
    let sidebarLeft:any = document.querySelector(".sidebar-left");
    let overlayLeft:any = document.querySelector(".overlay-left");
    let sidebarClose:any = document.querySelector(".sidebar-close .close");
  
    if (overlayLeft && sidebarLeft && sidebarClose) {
      overlayLeft.addEventListener("click", function () {
        sidebarLeft.classList.toggle("open");
        overlayLeft.classList.toggle("open");
      });
  
      sidebarClose.addEventListener("click", function () {
        sidebarLeft.classList.remove("open");
        overlayLeft.classList.remove("open");
      });
    }
  
    // ===== navbar nine sideMenu
    let sideMenuLeftNine = document.querySelector(".navbar-nine .menu-bar");
  
    if (sideMenuLeftNine && sidebarLeft && overlayLeft) {
      sideMenuLeftNine.addEventListener("click", function () {
        sidebarLeft.classList.add("open");
        overlayLeft.classList.add("open");
      });
    }
  
    //========= glightbox
   GLightbox({
      'href': 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
      'type': 'video',
      'source': 'youtube', //vimeo, youtube, or local
      'width': 900,
      'autoplayVideos': true,
    });
  }
  
  
}
