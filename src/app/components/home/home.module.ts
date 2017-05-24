import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from "../youtube/youtube.component";
import { MenuComponent } from "../menu/menu.component";
import { YoutubeService } from "../../services/youtube.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    YoutubeComponent,
    MenuComponent
  ],
  providers: [
    YoutubeService
  ]
})
export class HomeModule { }
