import { MessengerComponent } from './messenger/messenger.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'messenger', component: MessengerComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}
export const routingComponent = [HomeComponent, MessengerComponent]
