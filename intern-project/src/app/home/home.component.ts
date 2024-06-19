import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeJsComponent } from '../three-js/three-js.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ThreeJsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
