import { createSelector } from '@ngrx/store';
import { AppState, CollectionState } from '../appstate';

export const selectCollectionState = (state: AppState) => state.collectionState;

export const selectFavoriteList = createSelector(
  selectCollectionState,
  (state) => state.jokes
);
