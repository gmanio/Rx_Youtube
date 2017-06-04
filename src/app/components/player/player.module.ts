import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from "./player.component";
import { Routes, RouterModule } from "@angular/router";

export const playerRoutes: Routes = [
  { path: '', component: PlayerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(playerRoutes)
  ],
  declarations: [
    PlayerComponent
  ]
})
export class PlayerModule {
}
