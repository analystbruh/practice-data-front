import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCSV(): Observable<string> {
    return this.http.get('http://127.0.0.1:5000/api/v1/transactions/csv', { responseType: 'text'});
  }

  getTable(sys: string): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/v1/transactions/sql', {params: {system: sys}, responseType: 'blob'})
  }
}
