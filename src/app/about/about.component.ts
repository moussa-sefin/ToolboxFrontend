import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  WhoWeAre: boolean = false ; // Initial active tab
  ourVision:boolean = true;
  ourHistory:boolean = true;
  // Function to switch to the "Who We Are" tab
  switchToWhoTab() {
   this.WhoWeAre = false; 
   this.ourHistory = true;
   this.ourVision=true;

   console.log("who");
  }

  // Function to switch to the "Our Vision" tab
  switchToVisionTab() {
   this.WhoWeAre = true; 
   this.ourVision=false;
   this.ourHistory=true;

   console.log("vision");
  }

  // Function to switch to the "Our History" tab
  switchToHistoryTab() {
    this.WhoWeAre = true; 
    this.ourVision=true;
    this.ourHistory=false;

    console.log("history")
    
  }


}
