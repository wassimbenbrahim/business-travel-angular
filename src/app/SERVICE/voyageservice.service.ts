import { Voyages } from './../Constructor/Voyages';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoyageserviceService {
  urlapi="http://localhost:8081/voyage/add-Voyage";
  urlapii="http://localhost:8081/voyage/retrieve-all-Voyage";
  baseUrl="http://localhost:8081/voyage/remove-Voyage";
  baseUrll="http://localhost:8081/voyage/retrieve-Voyage";
  constructor(private http:HttpClient) { }
creat(voyage:Voyages):Observable<object>{
  return this.http.post<object>(`${this.urlapi}`,voyage);

}
getAllvoyage(): Observable<any> {
  return this.http.get(`${this.urlapii}`);
}
Delete(id): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);

}
getById(id) :Observable<any>{
  return this.http.get<Voyages>(`${this.baseUrll}/${id}`);

}
update(id:string,params: any){
  return this.http.put(`${this.baseUrl}/${id}`,params)
}
}
