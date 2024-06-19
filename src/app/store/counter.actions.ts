import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[counter] increment',
  props<{ value: number }>()
);

export const decrement = createAction('[counter] decrement');

export const init = createAction('[App] init');

export const setCounter = createAction(
  '[counter] Set',
  props<{ value: number }>()
);
