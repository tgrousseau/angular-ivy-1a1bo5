import { Component, VERSION } from '@angular/core';

export interface Recipe {
  title: string;
  picture: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  recipe: Recipe;

  constructor() {
    this.recipe = {
      title: 'Quiche Lorraine',
      picture:
        'https://assets.afcdn.com/recipe/20161128/28118_w1024h1024c1cx845cy3505.jpg',
    };
  }
}
