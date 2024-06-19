import { Component, OnInit, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import {
  counterTrebleCount,
  selectCount,
  selectDoubleCount,
} from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  // counter!: Signal<number>;
  store = inject(Store<{ counter: number }>);
  counter$!: Observable<number>;
  doubleCounter$!: Observable<number>;
  constructor() {
    // this.counter = toSignal(this.store.select('counter'));
  }
  ngOnInit(): void {
    this.counter$ = this.store.select(selectCount);
    this.doubleCounter$ = this.store.select(counterTrebleCount);
  }
}
