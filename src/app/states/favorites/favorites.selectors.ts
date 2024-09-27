import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, CollectionState } from '../appstate';
import { adapter } from './favorites.reducers';

export const selectCollectionState =
  createFeatureSelector<CollectionState>('FavoriteList');

export const selectJokes = createSelector(
  selectCollectionState,
  adapter.getSelectors().selectAll
);
