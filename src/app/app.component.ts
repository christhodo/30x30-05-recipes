import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipe-app';
  links = [
    { path: '/login', icon: 'vpn_key', title: 'Login' },
    { path: '/recipes', icon: 'view_list', title: 'Recipes' },
  ];
}
