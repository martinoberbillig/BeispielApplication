import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JokeBoxComponent } from './jokebox/jokebox.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { FavoritesComponent } from './favorites/favorites.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    JokeBoxComponent,
    ProgressbarComponent,
    FavoritesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'BeispielApplication';
}
