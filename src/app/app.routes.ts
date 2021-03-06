import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/etc/page-not-found.component";
import { LoginComponent } from "./components/login/login.component";

export const RootRouter = RouterModule.forRoot([
    // { path: '', loadChildren: './components/home/home.module#HomeModule' },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
    // { path: 'player', loadChildren: './components/player/player.module#PlayerModule' },
    // { path: 'player', component: PlayerComponent },
    { path: '**', component: PageNotFoundComponent }
  ],

  /**
   *  Some browsers does not support HTML5 pushstate.
   */
  {
    useHash: true
    // preloadingStrategy: PreloadAllModules
  }
);
