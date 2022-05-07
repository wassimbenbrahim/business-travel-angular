import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilServiceService {
  urlapii="";
  baseUrl="";
  constructor(private http:HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(`${this.urlapii}`);
  }
  Delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);

  }
}
