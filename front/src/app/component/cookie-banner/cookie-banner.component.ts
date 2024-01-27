import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss'
})
export class CookieBannerComponent implements OnInit {

  showMessage!: boolean

  constructor(private cookieService: CookieService){
    this.showMessage = false;
  }

  acceptCookies(){
    this.cookieService.set('cookieExemple', 'cookie');
    this.showMessage = false;
  }

  ngOnInit(){
    if(!sessionStorage.getItem('noCookie') || this.cookieService.get('cookieExemple')){
      this.showMessage = true;
    }
  }

  close(){
    this.showMessage = false;
  }

  blockCookies(){
    sessionStorage.setItem('noCookie', 'no');
    this.showMessage = false;
  }

}
