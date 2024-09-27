import { createReducer, on } from '@ngrx/store';
import { addToFavorites, removeFromFavorites } from './favorites.actions';
import { CollectionState, Joke } from '../appstate';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const adapter: EntityAdapter<Joke> = createEntityAdapter<Joke>();

export const initialFavoritesState: CollectionState = adapter.getInitialState();

export const favoritesReducer = createReducer(
  initialFavoritesState,
  on(addToFavorites, (state, joke) => {
    return adapter.addOne(joke, state);
  }),
  on(removeFromFavorites, (state, { id }) => {
    return adapter.removeOne(id, state);
  })
);
