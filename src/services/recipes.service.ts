import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';

const RECIPES_ARRAY = [
  [
    {
      title: 'Pizza de la mer',
      picture:
        'https://dam.savencia.com/api/wedia/dam/transform/fix635d9eidk6rrwseqxx1hm4hxuee5jn54fmie/800?t=resize&width=800',
    },
    {
      title: 'Burger végan',
      picture:
        'https://cuisine-addict.com/wp-content/uploads/2019/11/recette-burger-vegetarien-champignons.jpg',
    },
  ],
  [
    {
      title: 'Pâtes au pesto',
      picture:
        'https://img.cuisineaz.com/660x660/2016/04/28/i2894-pates-fraiches-au-pesto.jpg',
    },
    {
      title: 'Fondue savoyarde',
      picture:
        'https://assets.afcdn.com/recipe/20161130/59380_w1024h768c1cx2808cy1872.webp',
    },
  ],
  [
    {
      title: 'Poutine',
      picture:
        'https://www.spendwithpennies.com/wp-content/uploads/2021/05/Poutine-SpendWithPennies-7.jpg',
    },
    {
      title: 'Fish & chips',
      picture:
        'https://static.actu.fr/uploads/2020/09/restaurant-les-fishtons-rue-des-bouches-vieux-lille-fish-and-chips-poisson.jpeg',
    },
  ],
];

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  index = 0;
  recipe$ = new BehaviorSubject<Recipe[]>(RECIPES_ARRAY[this.index]);

  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    return this.recipe$;
  }

  swapRecipes() {
    this.index++;
    if (this.index === 3) {
      this.index = 0;
    }
    this.recipe$.next(RECIPES_ARRAY[this.index]);
  }
}
