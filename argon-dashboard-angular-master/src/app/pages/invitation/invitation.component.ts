import { Component, OnInit } from '@angular/core';
import {InvitationserService} from '../../services/invitationser.service';
import {Invitation} from '../../models/Invitation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  constructor(private router: Router, private _service: InvitationserService) {
  }

  listinvit: Invitation[];
  listinvitt: Object;


  ngOnInit(): void {
    this._service.getinvit().subscribe(res => {
      console.log(res);
      this.listinvit = res;


    });
  }
  delete(idInvit: number) {
    this._service.deleteUserById(idInvit).subscribe(data => { console.log(data); });
  }








}
