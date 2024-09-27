import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { laughReducer } from './states/counter/counter.reducers';
import { favoritesReducer } from './states/favorites/favorites.reducers';
import { loadJokeReducer } from './states/loading/loadingJoke.reducer';
import { LoadingJokeEffect } from './states/loading/loadingjoke.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'laughCounter', reducer: laughReducer }),
    provideState({ name: 'FavoriteList', reducer: favoritesReducer }),
    provideState({ name: 'loadJoke', reducer: loadJokeReducer }),
    provideEffects(LoadingJokeEffect),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(),
  ],
};
