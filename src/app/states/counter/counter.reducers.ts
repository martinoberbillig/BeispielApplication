import { createReducer, on } from '@ngrx/store';
import { incrementLaugh } from './counter.actions';
import { LaughState } from '../appstate';

export const initialLaughState: LaughState = {
  count: 0,
};

export const laughReducer = createReducer(
  initialLaughState,
  on(incrementLaugh, (state) => ({ ...state, count: state.count + 1 }))
);
