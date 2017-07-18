import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ApiService {

  constructor(public http: Http) {
  }

  request() {
    // return this.http.get('http://finance.daum.net/xml/xmlallpanel.daum?stype=P&type=S')
    // return this.http.get('/xml/xmlallpanel.daum?stype=P&type=S')
  }
}
