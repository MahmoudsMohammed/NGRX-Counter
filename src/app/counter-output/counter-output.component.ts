import { Component, OnInit, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  // counter!: Signal<number>;
  store = inject(Store);
  counter$: Observable<number>;
  constructor() {
    // this.counter = toSignal(this.store.select('counter'));
    this.counter$ = this.store.select('counter');
  }
  ngOnInit(): void {}
}
