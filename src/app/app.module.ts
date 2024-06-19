import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { counterEffect } from './store/counter.effect';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  // create a global object store (key[state key] : value [reference for reducer])
  // reducer only way to change the state
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
    }),
    // effect take array of side effect classes
    EffectsModule.forRoot([counterEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
