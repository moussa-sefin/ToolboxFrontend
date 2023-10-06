import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { MatIconModule } from '@angular/material/icon';
import { FileUploadModule } from 'primeng/fileupload';

import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCounterComponent } from './user-counter/user-counter.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { ListBoxFilterComponent } from './list-box-filter/list-box-filter.component';

import { ToollistComponent } from './toollist/toollist.component';
import { HomeComponent } from './home/home.component';
import { SingleToolComponent } from './single-tool/single-tool.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { PricingComponent } from './pricing/pricing.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { BrandAreaComponent } from './brand-area/brand-area.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { CustomScriptsComponent } from './custom-scripts/custom-scripts.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopButtonComponent } from './scroll-top-button/scroll-top-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { RegisterModelComponent } from './register-model/register-model.component';
import { TableToolsComponent } from './table-tools/table-tools.component';
import { PopularToolsComponent } from './popular-tools/popular-tools.component';
import { UserSidenavigatonBarComponent } from './user-sidenavigaton-bar/user-sidenavigaton-bar.component';
import { UserTopnavigatonBarComponent } from './user-topnavigaton-bar/user-topnavigaton-bar.component';
import { UserSettingDashboardComponent } from './user-setting-dashboard/user-setting-dashboard.component';
import { UserConversationComponent } from './user-conversation/user-conversation.component';
import { UserFooterDashboadComponent } from './user-footer-dashboad/user-footer-dashboad.component';
import { UserInformationDashboadComponent } from './user-information-dashboad/user-information-dashboad.component';
import { UserFavoriteComponent } from './user-favorite/user-favorite.component';
import { UserProfileEditorComponent } from './user-profile-editor/user-profile-editor.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserPasswordChangeComponent } from './user-password-change/user-password-change.component';
import { CreateToolComponent } from './create-tool/create-tool.component';
import { AuthInterceptor } from './authInterceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/authGuard';
import { ApiService } from './services/api.service';
import { MatSelectModule } from '@angular/material/select'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast'; // Import ToastModule
import { MessageService } from 'primeng/api';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';




@NgModule({
 
  declarations: [
    AppComponent,
    UserCounterComponent,
    ListBoxComponent,
    ListBoxFilterComponent,
    ToollistComponent,
    TableToolsComponent,
    HomeComponent,
    SingleToolComponent,
    NavigationBarComponent,
    SidebarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesSectionComponent,
    PricingComponent,
    CallToActionComponent,
    LatestNewsComponent,
    BrandAreaComponent,
    ContactSectionComponent,
    CustomScriptsComponent,
    MapComponent,
    FooterComponent,
    ScrollTopButtonComponent,
    
 
 
         UserDashboardComponent,
         RegisterModelComponent,
         PopularToolsComponent,
     
         UserSidenavigatonBarComponent,
         UserTopnavigatonBarComponent,
         UserSettingDashboardComponent,
         UserConversationComponent,
         UserFooterDashboadComponent,
         UserInformationDashboadComponent,
         UserFavoriteComponent,
         UserProfileEditorComponent,
         UserLogoutComponent,
         UserPasswordChangeComponent,
         CreateToolComponent,
    
        
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    KnobModule,
    MultiSelectModule,
    ToastModule ,
    FileUploadModule,
    ListboxModule,
    RatingModule,
    TableModule,
    DividerModule,
    MatDialogModule,
    DialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    DataViewModule,
    
 
 


    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("jwtToken"), // adjust this to your token storage
        allowedDomains: ["http://127.0.0.1:8000/"], // configure the domains where your API is hosted
      },
    }),



  
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
