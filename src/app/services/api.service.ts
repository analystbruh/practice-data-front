import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private prod = 'https:practicing-data.herokuapp.com/'
  // private dev = 'http://localhost:5000/'

  constructor(private http: HttpClient) { }

  getCSV(): Observable<string> {
    return this.http.get(`${this.prod}api/v1/transactions/csv`, { responseType: 'text'});
  }

  getTable(sys: string): Observable<any> {
    return this.http.get(`${this.prod}api/v1/transactions/sql`, {params: {system: sys}, responseType: 'blob'})
  }
}
