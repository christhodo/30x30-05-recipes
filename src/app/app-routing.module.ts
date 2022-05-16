import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'recipes', component: RecipesComponent },

  //wildcard rout for 404 page
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
