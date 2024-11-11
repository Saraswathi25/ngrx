import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterModel } from "./Counter";

//when the counter state is changed all the components that uses counterModel will get updated instead we can use selector to call particular component 
//where tht property is subscribed
const getCounterState =createFeatureSelector<counterModel>('counter');

export const getCounter =createSelector(getCounterState,(state)=>{
    return state.counter;
})

export const getName =createSelector(getCounterState,(state)=>{
    return state.name;
})