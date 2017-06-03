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
 * Components
 */

import { PageNotFoundComponent } from "./components/etc/page-not-found.component";
import { AppComponent } from './app.component';

/**
 * Modules
 */
import { SharedModule } from "./components/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    // SharedModule,
    FormsModule,
    HttpModule,
    RootRouter
  ],
  providers: [
    WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
