import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, init, setCounter } from './counter.actions';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selector';

@Injectable()
export class counterEffect {
  constructor(
    private actions$: Actions,
    // don't forget set the store object type when use it
    private store: Store<{ counter: number }>
  ) {}
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[counter] increment', decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, value]) => {
          localStorage.setItem('counter', value.toString());
        })
      ),
    {
      dispatch: false,
    }
  );

  setCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const countValue = localStorage.getItem('counter') || 0;
        return of(setCounter({ value: +countValue }));
      })
    )
  );
}
