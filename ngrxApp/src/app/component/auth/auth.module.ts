import { Router, RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { Store, StoreModule } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./store/auth.selector";
import { AuthReducer } from "./store/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./store/auth.effects";



const routes: Routes = [
  {path:'', children:[
    {path:'',  redirectTo:'login', pathMatch: 'full'},
    {path:'login', component:LoginComponent}
    
    
  ]}
  
];

@NgModule({
    declarations: [
      
      LoginComponent
     
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([AuthEffects]),
        ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer)
    ],
   
  })
export class AuthModule { }