import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './auth.service';
import { LoggedInAuthGuard } from './logged-in-auth.guard';
import { AuthGuard } from './auth.guard';
import { FriendsComponent } from './friends/friends.component';
import { GroupChatComponent } from './group-chat/group-chat.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  
  // { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard] },
  { path: '', component: LoginComponent, canActivate: [LoggedInAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoggedInAuthGuard] },
  { path: 'home',component: HomeComponent,  canActivate: [AuthGuard] },
  { path: 'friends',component: FriendsComponent,  canActivate: [AuthGuard] },
  { path: 'groupChat',component: GroupChatComponent,  canActivate: [AuthGuard] },
  { path: 'home',component: HomeComponent,  canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
