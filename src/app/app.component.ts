import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  recipe: Recipe;
  recipes: Recipe[];

  constructor(public recipesService: RecipesService) {
    this.recipe = {
      title: 'Quiche Lorraine',
      picture:
        'https://assets.afcdn.com/recipe/20161128/28118_w1024h1024c1cx845cy3505.jpg',
    };

    recipesService.getRecipes().subscribe((recipesList) => {
      this.recipes = recipesList;
    });
  }

  // Task 1
  recipeSubscribe() {
    let a = 3;
    this.recipesService.getRecipes().subscribe(() => {
      a = 5;
    });
    console.log(a);
  }

  swapRecipes() {
    this.recipesService.swapRecipes();
  }
}
