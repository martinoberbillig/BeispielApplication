import { createSelector } from '@ngrx/store';
import { AppState } from '../appstate';

export const selectLaughState = (state: AppState) => state.laughCounter;

export const selectCount = createSelector(
  selectLaughState,
  (state) => state.count
);
