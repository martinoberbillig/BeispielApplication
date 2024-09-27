import { createReducer, on } from '@ngrx/store';
import { LoadingJokeState } from '../appstate';
import * as LoadingJokeActions from './loadingJoke.action';

export const initialLoadingJokeState: LoadingJokeState = {
  isLoading: false,
  joke: { setup: '', punchline: '', id: -1 },
  error: null,
};

export const loadJokeReducer = createReducer(
  initialLoadingJokeState,
  on(LoadingJokeActions.loadJoke, (state) => ({ ...state, isLoading: true })),
  on(LoadingJokeActions.loadJokeSuccess, (state, { joke }) => ({
    ...state,
    isLoading: false,
    joke,
    error: null,
  })),
  on(LoadingJokeActions.loadJokeFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    error: errorMessage,
  }))
);
