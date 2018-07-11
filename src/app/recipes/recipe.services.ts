import { Recipe } from "./recipe.model";

export class RecipeService {
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply test', 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/09/one-pan-spaghetti-with-nduja-fennel-olives.jpg'),
        new Recipe('The Second Recipe', 'This is a simply description for the second recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/09/one-pan-spaghetti-with-nduja-fennel-olives.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }

}