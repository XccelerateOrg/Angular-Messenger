import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ServerService } from './server.service';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    MessageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
