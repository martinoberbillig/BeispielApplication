import { Component } from '@angular/core';
import { AppState } from '../states/appstate';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectCount } from '../states/counter/counter.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss',
})
export class ProgressbarComponent {
  progress$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.progress$ = this.store
      .select(selectCount)
      .pipe(map((value) => Math.min(value * 10, 100)));
  }
}
