import { inject, Injectable } from '@angular/core';
import { JokeApiService } from '../../services/joke.api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as loadingActions from './loadingJoke.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingJokeEffect {
  private api = inject(JokeApiService);
  action$ = inject(Actions);

  loadJoke$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadingActions.loadJoke),
      switchMap(() =>
        this.api.getJoke().pipe(
          map((res) => loadingActions.loadJokeSuccess({ joke: res })),
          catchError((error: { message: string }) =>
            of(
              loadingActions.loadJokeFailure({
                errorMessage: 'Failed to load Joke',
              })
            )
          )
        )
      )
    )
  );
}
