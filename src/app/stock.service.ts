import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:8084/SpringMVC/stocks';
  getAllStocks(): Observable<any> {
    return this.http.get<any>(this.url + `/retrieve-all-stocks`);
  }
  /*addStocks(body: any): Observable<any> {
    return this.http.post<any>(this.url + `/add-stock`, body);
  }*/
  createStock(stock: Stock): Observable<Object> {
    return this.http.post(this.url + `/add-stock`, stock);
  }
  deleteStock(idStock: number): Observable<Object> {
    return this.http.delete(this.url + `/remove-stock/${idStock}`);
  }
  updateStock(idStock: number, stock: Stock): Observable<Object> {
    return this.http.put(this.url + `/modify-stock/${idStock}`, stock);
  }
  getStockById(idStock: number): Observable<Stock> {
    return this.http.get<Stock>(this.url + `/retrieve-stock/${idStock}`);
  }
}
