import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'users',component:UsersComponent},
  {path:"userdetails/:id",component:UserdetailsComponent},
  {path:'technologies',component:TechnologiesComponent,children:[
    {path:'typescript',component:TypescriptComponent},
    {path:"javascript",component:JavascriptComponent},
    {path:'bootstrap',component:BootstrapComponent},
    {path:'',redirectTo:'typescript',pathMatch:'full'}
  ]},
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
  { path: 'test2', loadChildren: () => import('./test2/test2.module').then(m => m.Test2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
