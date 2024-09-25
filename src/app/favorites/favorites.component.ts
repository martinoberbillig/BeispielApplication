import { Component } from '@angular/core';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [FavoriteCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {}
