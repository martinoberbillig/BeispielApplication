import { createReducer, on } from '@ngrx/store';
import { addToFavorites, removeFromFavorites } from './favorites.actions';
import { CollectionState, Joke } from '../appstate';

export const initialFavoritesState: CollectionState = {
  jokes: [],
};

export const favoritesReducer = createReducer(
  initialFavoritesState,
  on(addToFavorites, (state, joke) => {
    if (state.jokes.find((element) => element.id === joke.id)) {
      return state;
    }
    return {
      ...state,
      jokes: [...state.jokes, joke],
    };
  })
);
