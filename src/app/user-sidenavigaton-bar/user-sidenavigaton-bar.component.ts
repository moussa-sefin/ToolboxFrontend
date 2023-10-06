import { Component, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-user-sidenavigaton-bar',
  templateUrl: './user-sidenavigaton-bar.component.html',
  styleUrls: ['./user-sidenavigaton-bar.component.css']
})
export class UserSidenavigatonBarComponent {
  userSettingsVisibility = false;
  tableToolVisibility = true;
  userInfoVisibility = false;
  userFavoriteVisibility = true;
  toolsListVisibility = true;
  userChangePwdVisibility=true;
  userProfileEditorVisibility=true;
  createToolVisibility=true

  userdashActivatort=true;
  userTableActivator=false;
  userFavoliteActivator=false;
  userToolsActivator=false;
  userChangePwdActivator=false;
  userProfileEditorActivator=false;
  toolCreateActivator=false

  @Output() userSettingsEvent = new EventEmitter;
  @Output() toolTableEvent = new EventEmitter;
  @Output() userInfoEvent = new EventEmitter;
  @Output() userFavoliteEvent = new EventEmitter;
  @Output() toolsListEvent = new EventEmitter
  @Output() profileEditEvent = new EventEmitter
  @Output() passwdChangeEvent = new EventEmitter
  @Output() toolCreateEvent = new EventEmitter


  constructor(){}



  showdashboard(){

    this.userSettingsVisibility  = false;
    this.tableToolVisibility = true;
    this.userInfoVisibility  = false;
    this.userFavoriteVisibility = true;
    this.toolsListVisibility = true;
    this.userChangePwdVisibility=true;
    this.userProfileEditorVisibility=true;
    this.createToolVisibility=true;

    this.userdashActivatort=true;
    this.userTableActivator=false;
    this.userFavoliteActivator=false;
    this.userToolsActivator=false;
    this.userChangePwdActivator=false;
    this.userProfileEditorActivator=false;
    this.toolCreateActivator=false; 



    this.userSettingsEvent.emit(this.userSettingsVisibility);
    this.toolTableEvent.emit(this.tableToolVisibility);
    this.userInfoEvent.emit(this.userInfoVisibility);
    this.userFavoliteEvent.emit(this.userFavoriteVisibility);
    this.toolsListEvent.emit(this.toolsListVisibility)
    this.profileEditEvent.emit(this.userProfileEditorVisibility)
    this.passwdChangeEvent.emit(this.userChangePwdVisibility)
    this.toolCreateEvent.emit(this.createToolVisibility)
  }

  showTableOfTools(){
    this.userSettingsVisibility  = true;
    this.tableToolVisibility = false;
    this.userInfoVisibility  = true;
    this.userFavoriteVisibility = true;
    this.toolsListVisibility = true;
    this.userChangePwdVisibility=true;
    this.userProfileEditorVisibility=true;
    this.createToolVisibility=true;



    this.userdashActivatort=false;
    this.userTableActivator=true;
    this.userFavoliteActivator=false;
    this.userToolsActivator=false;
    this.userChangePwdActivator=false;
    this.userProfileEditorActivator=false; 
    this.toolCreateActivator=false;
    // console.log("from child "+this.userSettingsVisibility, this.tableToolVisibility)

    this.userSettingsEvent.emit(this.userSettingsVisibility);
    this.toolTableEvent.emit(this.tableToolVisibility);
    this.userInfoEvent.emit(this.userInfoVisibility);
    this.userFavoliteEvent.emit(this.userFavoriteVisibility);
    this.toolsListEvent.emit(this.toolsListVisibility)
    this.profileEditEvent.emit(this.userProfileEditorVisibility)
    this.passwdChangeEvent.emit(this.userChangePwdVisibility)
    this.toolCreateEvent.emit(this.createToolVisibility)
    
   
    
  }



  showFavorite(){

    this.userSettingsVisibility  = true;
    this.tableToolVisibility = true;
    this.userInfoVisibility  = true;
    this.userFavoriteVisibility = false;
    this.toolsListVisibility = true;
    this.userChangePwdVisibility=true;
    this.userProfileEditorVisibility=true;
    this.createToolVisibility=true;


    this.userdashActivatort=false;
    this.userTableActivator=false;
    this.userFavoliteActivator=true;
    this.userToolsActivator=false;
    this.userChangePwdActivator=false;
    this.userProfileEditorActivator=false; 
    this.toolCreateActivator=false;

    this.userSettingsEvent.emit(this.userSettingsVisibility);
    this.toolTableEvent.emit(this.tableToolVisibility);
    this.userInfoEvent.emit(this.userInfoVisibility);
    this.userFavoliteEvent.emit(this.userFavoriteVisibility);
    this.toolsListEvent.emit(this.toolsListVisibility)
    this.profileEditEvent.emit(this.userProfileEditorVisibility)
    this.passwdChangeEvent.emit(this.userChangePwdVisibility)
    this.toolCreateEvent.emit(this.createToolVisibility)
  }


  showToolsList(){

    this.userSettingsVisibility  = true;
    this.tableToolVisibility = true;
    this.userInfoVisibility  = true;
    this.userFavoriteVisibility = true;
    this.toolsListVisibility = false;
    this.userChangePwdVisibility=true;
    this.userProfileEditorVisibility=true;
    this.createToolVisibility=true;

    this.userdashActivatort=false;
    this.userTableActivator=false;
    this.userFavoliteActivator=false;
    this.userToolsActivator=true;
    this.userChangePwdActivator=false;
    this.userProfileEditorActivator=false; 
    this.toolCreateActivator=false;

    this.userSettingsEvent.emit(this.userSettingsVisibility);
    this.toolTableEvent.emit(this.tableToolVisibility);
    this.userInfoEvent.emit(this.userInfoVisibility);
    this.userFavoliteEvent.emit(this.userFavoriteVisibility);
    this.toolsListEvent.emit(this.toolsListVisibility)
    this.profileEditEvent.emit(this.userProfileEditorVisibility)
    this.passwdChangeEvent.emit(this.userChangePwdVisibility)
    this.toolCreateEvent.emit(this.createToolVisibility)
  }


  showEditProfile(){

    this.userSettingsVisibility  = true;
    this.tableToolVisibility = true;
    this.userInfoVisibility  = true;
    this.userFavoriteVisibility = true;
    this.toolsListVisibility = true;
    this.userChangePwdVisibility=true;
    this.userProfileEditorVisibility=false;
    this.createToolVisibility=true


    this.userdashActivatort=false;
    this.userTableActivator=false;
    this.userFavoliteActivator=false;
    this.userToolsActivator=false;
    this.userChangePwdActivator=false;
    this.userProfileEditorActivator=true; 
    this.toolCreateActivator=false;

    this.userSettingsEvent.emit(this.userSettingsVisibility);
    this.toolTableEvent.emit(this.tableToolVisibility);
    this.userInfoEvent.emit(this.userInfoVisibility);
    this.userFavoliteEvent.emit(this.userFavoriteVisibility);
    this.toolsListEvent.emit(this.toolsListVisibility)
    this.profileEditEvent.emit(this.userProfileEditorVisibility)
    this.passwdChangeEvent.emit(this.userChangePwdVisibility)
    this.toolCreateEvent.emit(this.createToolVisibility)

  }
  showChangePassword(){


    this.userSettingsVisibility  = true;
    this.tableToolVisibility = true;
    this.userInfoVisibility  = true;
    this.userFavoriteVisibility = true;
    this.toolsListVisibility = true;
    this.userChangePwdVisibility=false;
    this.userProfileEditorVisibility=true;
    this.createToolVisibility=true;


    this.userdashActivatort=false;
    this.userTableActivator=false;
    this.userFavoliteActivator=false;
    this.userToolsActivator=false;
    this.userChangePwdActivator=true;
    this.userProfileEditorActivator=false; 
    this.toolCreateActivator=false;

    this.userSettingsEvent.emit(this.userSettingsVisibility);
    this.toolTableEvent.emit(this.tableToolVisibility);
    this.userInfoEvent.emit(this.userInfoVisibility);
    this.userFavoliteEvent.emit(this.userFavoriteVisibility);
    this.toolsListEvent.emit(this.toolsListVisibility)
    this.profileEditEvent.emit(this.userProfileEditorVisibility)
    this.passwdChangeEvent.emit(this.userChangePwdVisibility)
    this.toolCreateEvent.emit(this.createToolVisibility)
  }


  showCreateTool(){
    this.userSettingsVisibility  = true;
    this.tableToolVisibility = true;
    this.userInfoVisibility  = true;
    this.userFavoriteVisibility = true;
    this.toolsListVisibility = true;
    this.userChangePwdVisibility=true;
    this.userProfileEditorVisibility=true;
    this.createToolVisibility=false;


    this.userdashActivatort=false;
    this.userTableActivator=false;
    this.userFavoliteActivator=false;
    this.userToolsActivator=false;
    this.userChangePwdActivator=false;
    this.userProfileEditorActivator=false; 
    this.toolCreateActivator=true;

    this.userSettingsEvent.emit(this.userSettingsVisibility);
    this.toolTableEvent.emit(this.tableToolVisibility);
    this.userInfoEvent.emit(this.userInfoVisibility);
    this.userFavoliteEvent.emit(this.userFavoriteVisibility);
    this.toolsListEvent.emit(this.toolsListVisibility)
    this.profileEditEvent.emit(this.userProfileEditorVisibility)
    this.passwdChangeEvent.emit(this.userChangePwdVisibility)
    this.toolCreateEvent.emit(this.createToolVisibility)


  }
  userLogout(){
    alert("loged out");

  }

}
