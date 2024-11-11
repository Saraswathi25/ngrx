import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from 'src/app/shared/store/Counter';
import { decrement, increment, reset } from 'src/app/shared/store/counter.actions';


@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {

  // constructor(private store:Store<{counter:{counter:number}}>){//counter is the name we included in app module followed by state value format

  // }

  //Refactored counterMOdel

  constructor(private store:Store <counterModel>){

  }
  onIncrement(){
    this.store.dispatch(increment())

  }

  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
}
