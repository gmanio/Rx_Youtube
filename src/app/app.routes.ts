import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/etc/page-not-found.component";

export const RootRouter = RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
    { path: '**', component: PageNotFoundComponent }
  ],

  /**
   *  Some browsers does not support HTML5 pushstate.
   */
  { useHash: true }
);
