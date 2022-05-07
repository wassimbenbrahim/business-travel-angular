import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageserviceService } from 'src/app/SERVICE/voyageservice.service';

@Component({
  selector: 'app-listevoyage',
  templateUrl: './listevoyage.component.html',
  styleUrls: ['./listevoyage.component.scss']
})
export class ListevoyageComponent implements OnInit {
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
delete(id){
  this.voyageservice.Delete(id).subscribe(data=>{
    console.log(data);
    this.affiche();
  })
}
GoToList(){
  this.router.navigate(['voyages']);
}
GOToEdit(id){
  this.router.navigate(['voyag']);
}
}
