import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Input() recipe: Recipe;

  constructor() {}
}
