import { Component, OnInit } from '@angular/core';
import {InvitationserService} from '../../services/invitationser.service';
import {Invitation} from '../../models/Invitation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addinvitation',
  templateUrl: './addinvitation.component.html',
  styleUrls: ['./addinvitation.component.scss']
})
export class AddinvitationComponent implements OnInit {
Invitation: Invitation = new Invitation();
  constructor(private _service: InvitationserService , private _router: Router) { }

  ngOnInit(): void {
  }
  addUser() {
    this. _service.addinvit(this.Invitation).subscribe(() => this._router.navigateByUrl('/addinvitation'));
  }


}
