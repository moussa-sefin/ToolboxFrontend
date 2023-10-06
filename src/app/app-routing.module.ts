import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToollistComponent } from './toollist/toollist.component';
import { SingleToolComponent } from './single-tool/single-tool.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from './services/authGuard';



const routes: Routes = [
      {path:"",component:HomeComponent},
      {path:"tools", component:ToollistComponent},
      {path:"tool/:id/:title", component:SingleToolComponent},
      {path:"dashboard", component:UserDashboardComponent,canActivate: [AuthGuard]},
  
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
}
