import { createSelector } from '@ngrx/store';
// selector take object with all state at the store object return what needed state slice
// after make logic on it
export const selectCount = (state: { counter: number }) => state.counter;
export const selectDoubleCount = (state: { counter: number }) =>
  state.counter * 2;

  // create selector which depends on another selector function 
export const counterTrebleCount = createSelector(
  selectDoubleCount,
  (state) => state * 3
);
