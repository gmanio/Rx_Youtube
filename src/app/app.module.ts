import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Router
 */
import { RootRouter } from "./app.routes";

/**
 * Services
 */
import { WindowRefService } from "./services/window-ref.service";

/**
 * Modules
 */
import { YoutubeModule } from "./components/youtube/youtube.module";

/**
 * Components
 */
import { PageNotFoundComponent } from "./components/etc/page-not-found.component";
import { AppComponent } from './app.component';
import { RouterGuardService } from "./services/router-guard.service";
import { ArchiveComponent } from "./components/archive/archive.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RootRouter,
    YoutubeModule
  ],
  providers: [
    WindowRefService,
    RouterGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
