import { ProfilServiceService } from './../../SERVICE/profil-service.service';
import { Component, OnInit } from '@angular/core';
import { VoyageserviceService } from 'src/app/SERVICE/voyageservice.service';

@Component({
  selector: 'app-listeemployee',
  templateUrl: './listeemployee.component.html',
  styleUrls: ['./listeemployee.component.scss']
})
export class ListemployeeComponent implements OnInit {
  profil :any=[];
  constructor(private profilservice:ProfilServiceService) { }

  ngOnInit() {
     this.affiche();

  }
 affiche(){
    this.profilservice.getAll().subscribe(data=>{
       console.log(data);
       this.profil=data;
    },error=> console.log (error));

  }
 delete(id){
  this.profilservice.Delete(id).subscribe(data=>{
   console.log(data);
    this.affiche();
   })
 }
}
