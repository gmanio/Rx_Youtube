import { Component } from '@angular/core';

@Component({
  template: `
          <div class="error404page">
            <div class="newcharacter404">
              <div class="chair404"></div>
              <div class="leftshoe404"></div>
              <div class="rightshoe404"></div>
              <div class="legs404"></div>
              <div class="torso404">
                <div class="body404"></div>
                <div class="leftarm404"></div>
                <div class="rightarm404"></div>
                <div class="head404">
                  <div class="eyes404"></div>
                </div>
              </div>
              <div class="laptop404">
                <div class="txt_404">
                  <span>Sorry!</span>
                  <span>Page not founded!</span>
                </div>
              </div>
            </div>
          </div>`,
  styleUrls: ['./page-not-found.component.css']
})

export class PageNotFoundComponent {
}
