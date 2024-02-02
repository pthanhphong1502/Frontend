import {
  HttpHeaderResponse,
  HttpHeaders,
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopupService {
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}
  GetAllTopup(): Observable<any[]> {
    const url =
      'https://localhost:7015/api/TopUp/GetAllTopUps?page=1&pageSize=1000';
    return this.http.get<any[]>(url);
  }

  getChart(year: string): Observable<any[]> {
    const url =
      'https://localhost:7015/api/TopUp/get-revenue-statistics/'+year;
    return this.http.get<any[]>(url);
  }
}
