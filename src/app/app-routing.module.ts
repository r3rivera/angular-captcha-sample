import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './_components/main/main.component';
import { Captcha2Component, Captcha3Component } from './_components/recaptcha';

const routes: Routes = [
  { path: 'captcha2', component: Captcha2Component},
  { path: 'captcha3', component: Captcha3Component},
  { path: '', component: MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
