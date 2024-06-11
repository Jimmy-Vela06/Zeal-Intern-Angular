import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { TipCalculatorComponent } from './tip-calculator/tip-calculator.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GameComponent } from './game/game.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  {
    path: 'tip-calculator',
    title: 'Tip-Calculator',
    component: TipCalculatorComponent,
  },
  {
    path: 'grocery-list',
    title: 'Grocery-List',
    component: GroceryListComponent,
  },
  { path: 'game', title: 'Game', component: GameComponent },
  { path: 'weather', title: 'Weather', component: WeatherComponent },
];
