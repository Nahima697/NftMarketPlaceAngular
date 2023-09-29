import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  url: string= "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=eur&days=7&interval=daily";

  constructor(private http:HttpClient) { }
  getPriceData(): Observable<any> {
    return this.http.get(this.url);
  }
}
