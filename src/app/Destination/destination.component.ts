import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageserviceService } from '../SERVICE/voyageservice.service';



@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  voyage :any=[];

  constructor(private voyageservice:VoyageserviceService,private router:Router) { }

  ngOnInit() {
  this.affiche();
  }
  affiche(){
    this.voyageservice.getAllvoyage().subscribe(data=>{
       console.log(data);
       this.voyage=data;
    },error=> console.log (error));
}
}
