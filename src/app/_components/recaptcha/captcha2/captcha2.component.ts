import { Component, OnInit } from '@angular/core';
import { CaptchaService } from '../../../_services/captcha.service';


@Component({
  selector: 'app-captcha2',
  templateUrl: './captcha2.component.html',
  styleUrls: ['./captcha2.component.scss']
})
export class Captcha2Component implements OnInit {

  constructor(private captchaService: CaptchaService) { }

  ngOnInit(): void {
  }


  resolved(captchaResponse: any[]){
    this.captchaService.setToken(new String(captchaResponse).valueOf());
  }

  getToken():string{
    return this.captchaService.getToken();
  }

  onSubmitForm(): void {

  }

}
