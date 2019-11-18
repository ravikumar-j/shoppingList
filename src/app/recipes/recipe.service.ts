import { EventEmitter, Injectable } from '@angular/core';
import { Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();


        private recipes: Recipe[] = [
        new Recipe('Tasty Nugets !', 'Just Awesome !', 'https://cdn.pixabay.com/photo/2014/04/03/00/29/chicken-nuggets-308448_960_720.png',
        [
            new Ingredient( 'Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger ', 'Super Yummy Tasty', 'https://cdn.pixabay.com/photo/2014/12/21/23/56/hamburger-576419_960_720.png',
        [
            new Ingredient( 'Buns', 2),
            new Ingredient('Meat', 1)   
        ])
      ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes(){
      return this.recipes.slice();
  }

  getRecipe(index:number){
      return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
  }
}