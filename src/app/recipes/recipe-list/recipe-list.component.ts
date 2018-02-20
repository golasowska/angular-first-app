import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe( 'Spaghetti Carbonara', 'This is simply a test',
      'https://media4.popsugar-assets.com/files/2016/04/26/094/n/1922398/25749f2795cdc1d1_carbonara3.xxxlarge_2x.jpg'),
    new Recipe( 'Spaghetti Carbonara', 'This is simply a test',
      'https://media4.popsugar-assets.com/files/2016/04/26/094/n/1922398/25749f2795cdc1d1_carbonara3.xxxlarge_2x.jpg'),
    new Recipe( 'Spaghetti Carbonara', 'This is simply a test',
      'https://media4.popsugar-assets.com/files/2016/04/26/094/n/1922398/25749f2795cdc1d1_carbonara3.xxxlarge_2x.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
