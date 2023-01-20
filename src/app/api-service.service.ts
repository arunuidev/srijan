import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  configUrl = 'assets/data.json';

  constructor(private http:HttpClient) { }

  bodyTag = {
    "currency": "USD",
    "codes": ["ETH", "BNB", "DOGE","ETC","GRIN"],
    "sort": "rank",
    "order": "ascending",
    "offset": 0,
    "limit": 0,
    "meta": true
  }

  headers = {
    headers:new HttpHeaders({
      "content-type": "application/json",
      "x-api-key": "ed1acfc5-1ff9-41c1-a6ae-70c97a95b6a1",
    })
  }

  getConfig() {
    return this.http.get<any>("https://fakestoreapi.com/products");
  }

  getatsConfig() {
    return this.http.get<any>(this.configUrl);
  }

  postCoins(){
    return this.http.post<any>("https://api.livecoinwatch.com/coins/map",this.bodyTag,this.headers);
  }
  
}
