import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialCounter = 0;

// setup the state initial value and actions will update the state
export const counterReducer = createReducer(
  initialCounter,
  on(increment, (state) => state + 1)
);
