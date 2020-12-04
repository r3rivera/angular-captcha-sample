import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { CaptchaService } from '../../../_services/captcha.service';

@Component({
  selector: 'app-captcha3',
  templateUrl: './captcha3.component.html',
  styleUrls: ['./captcha3.component.scss']
})
export class Captcha3Component implements OnInit {

  constructor(private recaptchav3service: ReCaptchaV3Service, private captchaService: CaptchaService) { }

  ngOnInit(): void {
  }


  onSubmitForm(): void {
    this.recaptchav3service.execute('submitForm').subscribe(
      (token) => {
        this.captchaService.setToken(token);
      }
    );
  }

  getToken(): string{
    return this.captchaService.getToken();
  }
}
