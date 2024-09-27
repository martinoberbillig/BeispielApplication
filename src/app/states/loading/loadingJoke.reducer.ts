import { createReducer, on } from '@ngrx/store';
import { LoadingJokeState } from '../appstate';
import * as LoadingJokeActions from './loadingJoke.action';

export const initialLoadingJokeState: LoadingJokeState = {
  joke: { setup: '', punchline: '', id: -1 },
  error: null,
};

export const loadJokeReducer = createReducer(
  initialLoadingJokeState,
  on(LoadingJokeActions.loadJokeSuccess, (state, { joke }) => ({
    ...state,
    joke,
    error: null,
  })),
  on(LoadingJokeActions.loadJokeFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  }))
);
