import { Component, OnInit } from '@angular/core';
import {InvitationserService} from '../../services/invitationser.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Invitation} from '../../models/Invitation';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  Currentinvit = new Invitation();

  constructor(private _service: InvitationserService , private activatedRoute: ActivatedRoute,
  private router: Router, ) { }

  ngOnInit(): void {
  }
  updateClaim() {
    this._service.updateClaim(this.Currentinvit).subscribe(res => {
      this.router.navigate(['/update']);
    });
  }

}
