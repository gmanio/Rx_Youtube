import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WindowRefService } from "./services/window-ref.service";
import { YoutubeService } from "./services/youtube.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WindowRefService,
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
