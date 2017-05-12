import { RouterModule } from "@angular/router";
import { YoutubeComponent } from "./components/youtube/youtube.component";
import { PageNotFoundComponent } from "./components/etc/page-not-found.component";
import { ArchiveComponent } from "./components/archive/archive.component";
import { RouterGuardService } from "./services/router-guard.service";

export const RootRouter = RouterModule.forRoot([
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    {
      path: 'main', component: YoutubeComponent,
      canActivate: [RouterGuardService],
      children:[
        { path: 'archive', component: ArchiveComponent },
      ]
    },
    { path: '**', component: PageNotFoundComponent }
  ],

  /**
   *  Some browsers does not support HTML5 pushstate.
   */
  { useHash: true }
);
