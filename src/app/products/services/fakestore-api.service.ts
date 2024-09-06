import {Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakestoreApiService {
  private baseUrl: string = 'https://fakestoreapi.com';
  private http: HttpClient = inject(HttpClient);

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }
}
