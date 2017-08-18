import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MessagesService } from './messages.service';

import { AppComponent } from './app.component';
import { CockpitComponent } from './messenger/cockpit/cockpit.component';
import { MessageComponent } from './messenger/message/message.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ServerService } from './server.service';
import { MessengerComponent } from './messenger/messenger.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    MessageComponent,
    FilterPipe,
    MessengerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
