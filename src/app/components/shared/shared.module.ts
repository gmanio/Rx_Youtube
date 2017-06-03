import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperVscrollDirective } from "../../directives/swiper-vscroll.directive";

@NgModule({
  imports: [
    CommonModule,
    SwiperVscrollDirective
  ],
  exports: [
    SwiperVscrollDirective
  ],
  declarations: []
})
export class SharedModule {
}
