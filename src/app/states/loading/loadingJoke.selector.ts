import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingJokeState } from '../appstate';

export const selectLoadingJokeFeature =
  createFeatureSelector<LoadingJokeState>('loadJoke');

export const selecteJoke = createSelector(
  selectLoadingJokeFeature,
  (state: LoadingJokeState) => state.joke
);

export const selecteError = createSelector(
  selectLoadingJokeFeature,
  (state: LoadingJokeState) => state.error
);
