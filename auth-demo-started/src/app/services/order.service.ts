import { AuthHttp } from 'angular2-jwt/angular2-jwt'; 
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: Http, private authHttp: AuthHttp) {
  }

  getOrders() { 
    return this.http.get('/api/orders')
      .map(response => response.json());
  }
}
