import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WindowRefService } from "./services/window-ref.service";
import { YoutubeService } from "./services/youtube.service";
import { YoutubeComponent } from './components/youtube/youtube.component';
import { PageNotFoundComponent } from "./components/etc/page-not-found.component";
import { RootRouter } from "./app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArchiveComponent } from './components/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    PageNotFoundComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RootRouter
  ],
  providers: [
    WindowRefService,
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
