import { createReducer, on } from '@ngrx/store';
import { addWelcome, customIncrement, decrement, increment, reset } from './counter.actions';
import { intialState } from './counter.state';

const _counterReducer = createReducer(
  intialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement,(state)=>{
    return{
        ...state,
        counter:state.counter-1
    }
}),
on(reset,(state)=>{
    return{
        ...state,
        counter:0
    }
}),
on(customIncrement,(state,action)=>{
  console.log("state:"+state, "action:"+action)
    return{
        ...state,
        counter:action.action=="add"?state.counter+action.value: state.counter-action.value
    }
}),
on(addWelcome,(state)=>{
  return{
    ...state,
    name:'Welcome to counter Application'
  }
})
);


export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
