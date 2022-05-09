import { Component, VERSION } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipes.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  recipe: Recipe;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    this.recipe = {
      title: 'Quiche Lorraine',
      picture:
        'https://assets.afcdn.com/recipe/20161128/28118_w1024h1024c1cx845cy3505.jpg',
    };

    recipeService.getRecipes().subscribe((recipesList) => {
      this.recipes = recipesList;
    });
  }

  // Task 1
  recipeSuscribe() {
    let a = 3;
    this.recipeService.getRecipes().subscribe(() => {
      a = 5;
    });
    console.log(a);
  }
}
