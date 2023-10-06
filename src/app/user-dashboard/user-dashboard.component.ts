import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserDashboardContentVisibilityService } from '../services/user-dashboard-content-visibility.service';
import { UserSidenavigatonBarComponent } from '../user-sidenavigaton-bar/user-sidenavigaton-bar.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent{

  constructor(){} 
  viewsettings:boolean = false;
  viewToolTable:boolean = true;
  viewInfo:boolean = false;
  viewFavorite:boolean = true;
  viewToolsList:boolean = true;
  viewProfileEditor:boolean = true;
  viewPasswordChange:boolean=true
  viewToolCreate:boolean=true



 
  settingReceiveMessage($event:boolean){
    this.viewsettings = $event;
    console.log(this.viewsettings)
  }
  tableReceiveMessage($event:boolean){
    this.viewToolTable = $event;
    console.log(this.viewToolTable)
  }

  infoReceiveMessage($event:boolean){
    this.viewInfo = $event;
  }

  favoriteReceieMessage($event:boolean){
    this.viewFavorite = $event;
  }

  toolsListReceiveMessage($event:boolean){
    this.viewToolsList = $event;
  }

  profileEditorReceiveMessage($event:boolean){
    this.viewProfileEditor = $event;
    
  }
  passwordChangeReceiveMessage($event:boolean){
    this.viewPasswordChange = $event;
  }

  toolCreateReceiver($event:boolean){
    this.viewToolCreate=$event
  }

}

