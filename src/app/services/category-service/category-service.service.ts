import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getCatalog(): Observable<any[]> {
    const url = 'https://localhost:7015/api/Catalog';
    return this.http.get<any[]>(url);
  }
  addCatolog(val: string): Observable<any[]> {
    const url = 'https://localhost:7015/api/Catalog';
    const value ={catalogName: val};
    return this.http.post<any[]>(url,value,this.httpOption);
  }
  updateCatolog(id: number, val: string): Observable<any[]> {
    const url = 'https://localhost:7015/api/Catalog/'+id;
    const value ={catalogName: val};
    return this.http.put<any[]>(url,value,this.httpOption);
  }
  deleteCatolog(id: number): Observable<any[]> {
    const url = 'https://localhost:7015/api/Catalog/'+id;
    return this.http.delete<any[]>(url);
  }
}
