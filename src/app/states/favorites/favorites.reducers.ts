import { createReducer, on } from '@ngrx/store';
import { addToFavorites, removeFromFavorites } from './favorites.actions';
import { Joke } from '../appstate';

export const initialFavoritesState: Joke[] = [];

export const favoritesReducer = createReducer(
  initialFavoritesState,
  on(addToFavorites, (state, joke) => {
    if (state.indexOf(joke.id) > -1) return state;

    return [...state, joke];
  })
);
