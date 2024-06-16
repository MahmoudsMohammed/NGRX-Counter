import { createReducer } from '@ngrx/store';

const initialCounter = 0;

// setup the state initial value and actions will update the state
export const counterReducer = createReducer(initialCounter);
