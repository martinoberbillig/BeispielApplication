import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, CollectionState } from '../appstate';

export const selectCollectionState =
  createFeatureSelector<CollectionState>('FavoriteList');

// Selector für die Witze
export const selectJokes = createSelector(
  selectCollectionState,
  (state: CollectionState) => state.jokes
);
