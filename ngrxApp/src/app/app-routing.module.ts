import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
    path:'counter',
    loadChildren:()=> import('./component/counter/counter.module').then(m=>m.CounterModule)
    
  },
  {
    path:'posts',
    loadChildren:()=> import('./component/posts/post.module').then((m)=>m.PostsModule),
   
  },
  {
    path:'auth',
    loadChildren:()=> import('./component/auth/auth.module').then((m)=>m.AuthModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
