import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe( 'Spaghetti Carbonara', 'This is simply a test',
      'https://media4.popsugar-assets.com/files/2016/04/26/094/n/1922398/25749f2795cdc1d1_carbonara3.xxxlarge_2x.jpg'),
    new Recipe( 'Penne Arabiata', 'This is simply a test',
      'https://www.marta-gotuje.pl/marta-gotuje.pl/wp-content/uploads/2014/07/Makaron-penne-z-kurczakiem-i-pomidorami.jpg'),
    new Recipe( 'Farfalle al pesto', 'This is simply a test',
      'https://images-3662.kxcdn.com/fidelitynews/wp-content/uploads/2014/11/Farfalle-al-pesto-pat%C3%A8-d-olive-e-zucchine-66174-2-768x1024.jpg?w=580')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
