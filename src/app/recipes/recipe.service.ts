import {EventEmitter} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe( 'Spaghetti Carbonara',
      'This is simply a test',
      'https://media4.popsugar-assets.com/files/2016/04/26/094/n/1922398/25749f2795cdc1d1_carbonara3.xxxlarge_2x.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Meat', 1),
      ]
    ),

    new Recipe( 'Penne Arabiata',
      'This is simply a test',
      'https://www.marta-gotuje.pl/marta-gotuje.pl/wp-content/uploads/2014/07/Makaron-penne-z-kurczakiem-i-pomidorami.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Eggs', 3),
        new Ingredient('Meat', 1),
      ]
    ),
    new Recipe( 'Farfalle al pesto',
      'This is simply a test',
      'https://images-3662.kxcdn.com/fidelitynews/wp-content/uploads/2014/11/Farfalle-al-pesto-pat%C3%A8-d-olive-e-zucchine-66174-2-768x1024.jpg?w=580',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Pesto', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
