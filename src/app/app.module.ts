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


/**
 * Components
 */

import { PageNotFoundComponent } from "./components/etc/page-not-found.component";
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from "@angular/common";

/**
 * Modules
 */

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RootRouter
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
