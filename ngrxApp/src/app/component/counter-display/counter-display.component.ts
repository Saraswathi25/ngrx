import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscribable, Subscription } from 'rxjs';
import { counterModel } from 'src/app/shared/store/Counter';
import { getCounter } from 'src/app/shared/store/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit,OnDestroy {

  constructor(private store:Store<AppState>){

  }
  counterdisplay!:number;
  name!:string;
  counterSubscription!:Subscription;
  ngOnInit():void{
    this.counterSubscription=this.store.select(getCounter).subscribe(counter=>{
      this.counterdisplay=counter
     
    })
  }

  ngOnDestroy(){
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
   
  }

}
