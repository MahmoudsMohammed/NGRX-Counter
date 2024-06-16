import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  store = inject(Store);
  increment() {
    this.store.dispatch(increment({ value: 2 }));
  }

  decrement() {}
}
