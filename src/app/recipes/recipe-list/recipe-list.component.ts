import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/09/one-pan-spaghetti-with-nduja-fennel-olives.jpg'),
    new Recipe('The Second Recipe', 'This is a simply description for the second recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/09/one-pan-spaghetti-with-nduja-fennel-olives.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
