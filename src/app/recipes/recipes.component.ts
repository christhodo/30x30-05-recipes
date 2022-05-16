import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../common/models/services/recipes.service';
import { Recipe } from '../common/models/recipes';

const emptyRecipe: Recipe = {
  id: null,
  name: '',
  ingredients: '',
  temperature: '',
  time: '',
};

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes = [];
  selectedRecipe = emptyRecipe;
  originalName = '';

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.fetchRecipes();
  }

  selectRecipe(recipe) {
    this.selectedRecipe = { ...recipe };
    this.originalName = recipe.name;
  }

  fetchRecipes() {
    this.recipesService
      .all()
      .subscribe((result: any) => (this.recipes = result));
  }

  saveRecipe(recipe) {
    if (recipe.id) {
      this.updateRecipe(recipe);
    } else {
      this.createRecipe(recipe);
    }
  }

  createRecipe(recipe) {
    this.recipesService
      .create(recipe)
      .subscribe((result) => this.fetchRecipes());
  }

  updateRecipe(recipe) {
    this.recipesService
      .update(recipe)
      .subscribe((result) => this.fetchRecipes());
  }

  deleteRecipe(recipeId) {
    console.log('delete recipe', recipeId);
  }

  reset() {
    this.selectRecipe({ ...emptyRecipe });
  }
}
