import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { counterModel } from 'src/app/shared/store/Counter';
import { addWelcome, customIncrement } from 'src/app/shared/store/counter.actions';
import { getName } from 'src/app/shared/store/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit{

  constructor(private store:Store<AppState>){

  }

 

  counterInput !:number;
  actionType :string="add";
  name!:string;
  counterSubscribe!:Subscription;
  ngOnInit() {
    this.store.select(getName).subscribe(name=>{
     
      this.name=name
    })
  }
  onCustomIncrement(){
    this.store.dispatch(customIncrement({value: +this.counterInput,action:this.actionType}))

  }
  addWelcome(){
    this.store.dispatch(addWelcome())
  }

}
