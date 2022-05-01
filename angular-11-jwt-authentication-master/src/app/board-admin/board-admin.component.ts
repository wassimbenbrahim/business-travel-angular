import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {User} from '../../models/Users';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  user?: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;

        this.userService.getusers().subscribe(res => {
          console.log(res);
          this.user = res; });
      },
        err => {
        this.content = JSON.parse(err.error).message;

      }
    );
  }
}
