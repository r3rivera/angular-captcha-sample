import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { Captcha3Component } from './_components/recaptcha/captcha3/captcha3.component';
import { Captcha2Component } from './_components/recaptcha/captcha2/captcha2.component';
import { MainComponent } from './_components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    Captcha3Component,
    Captcha2Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaV3Module
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue : '6LeqPOUZAAAAAC5a2rya1fmhVlE9emoItqlaCFd6'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
