import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShopingListService } from "../shoping-list/shoping-list.services";

@Injectable() 

export class RecipeService {
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply test', 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/09/one-pan-spaghetti-with-nduja-fennel-olives.jpg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
        new Recipe('The Second Recipe', 'This is a simply description for the second recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/09/one-pan-spaghetti-with-nduja-fennel-olives.jpg',[new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
      ];

      constructor(private slService: ShopingListService){}
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}