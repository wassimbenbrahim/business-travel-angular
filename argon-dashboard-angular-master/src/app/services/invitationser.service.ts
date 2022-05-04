import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Invitation} from '../models/Invitation';
import {ResponseMessage} from '../models/ResponseMessage';

@Injectable({
  providedIn: 'root'
})
export class InvitationserService {
  constructor(private _http: HttpClient) {
  }

  usersUrl = 'http://localhost:8089/api/invitations';
  usersUrll = 'http://localhost:8089/api/sendInvitation';
  getinvit(): Observable<Invitation[]> {
    return this._http.get<Invitation[]>(this.usersUrl);
  }

  deleteUserById(idInvit: number) {
    return this._http.delete('http://localhost:8089/api/invitation/delete/' + idInvit);
  }

  // tslint:disable-next-line:no-shadowed-variable
  addinvit(Invitation: Invitation) {
    return this._http.post<Invitation>('http://localhost:8089/api/invitation/save', Invitation);
  }

  // tslint:disable-next-line:no-shadowed-variable
  updateClaim(Invitation: Invitation): Observable<Invitation> {
    return this._http.put<Invitation>('http://localhost:8089/api/invitation/update', Invitation);
  }

  // tslint:disable-next-line:no-shadowed-variable

  sendinvit(): Observable<Invitation> {
    return this._http.post<Invitation>(this.usersUrll, {observe: ResponseMessage});
  }
}
