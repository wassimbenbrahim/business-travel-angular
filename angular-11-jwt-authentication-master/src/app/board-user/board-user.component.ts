import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Invitation} from '../../models/Invitation';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;
  listinvit?: Invitation[];
  currentUser: any;
  isDisabled = false;
  constructor(private userService: UserService , private token: TokenStorageService)  { }


  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
        this.currentUser = this.token.getUser();


        this.userService.getinvitbyid(this.currentUser.id).subscribe(res => {
          console.log(res);
          this.listinvit = res; // @ts-ignore
          this.listinvit = Array.of(this.listinvit);


        });
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  getname(){
    alert('thanx for accept');
  }
}
