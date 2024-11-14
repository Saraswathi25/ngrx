import { CommonModule } from "@angular/common";
import { CounterButtonComponent } from "./counter-button/counter-button.component";

import { CounterComponent } from "./counter.component";

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "src/app/shared/store/counter.reducer";
import { CounterDisplayComponent } from "../counter-display/counter-display.component";
import { CustomCounterComponent } from "../custom-counter/custom-counter.component";

const routes: Routes = [
  
    {
      path:'',component:CounterComponent
    },
   
    
    
  ];
  


@NgModule({
    declarations: [
     
      CounterButtonComponent,
      CounterDisplayComponent,
      CustomCounterComponent,
      CounterComponent
     
    ],
    imports: [
    CommonModule, FormsModule,MaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('counter',counterReducer),
    
   
    ],
   
  })
export class CounterModule { }