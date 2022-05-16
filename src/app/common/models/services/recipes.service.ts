import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  model = 'recipes';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(recipe) {
    return this.http.post(this.getUrl(), recipe);
  }

  update(recipe) {
    return this.http.put(this.getUrlWithID(recipe.id), recipe);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}${id}`;
  }
}
