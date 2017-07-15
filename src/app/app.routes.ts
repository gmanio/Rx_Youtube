import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./components/etc/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { PlayerComponent } from "./components/player/player.component";

export const RootRouter = RouterModule.forRoot([
    // { path: '', loadChildren: './components/home/home.module#HomeModule' },
    // { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
    // { path: 'player', loadChildren: './components/player/player.module#PlayerModule' },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'player', component: PlayerComponent },
    { path: '**', component: PageNotFoundComponent }
  ],

  /**
   *  Some browsers does not support HTML5 pushstate.
   */
  {
    useHash: true,
    // preloadingStrategy: PreloadAllModules
  }
);
