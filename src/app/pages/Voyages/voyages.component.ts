import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Voyages } from 'src/app/Constructor/Voyages';
import { VoyageserviceService } from 'src/app/SERVICE/voyageservice.service';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.scss']
})
export class VoyagesComponent implements OnInit {
  voyage :Voyages=new Voyages()
  voyagForm:FormGroup;
  constructor(private datePipe: DatePipe,public formBuilder:FormBuilder,private voyageservice:VoyageserviceService,private router:Router) { }

  ngOnInit() {
    this.voyagForm=this.formBuilder.group({
      destination:['', [Validators.required, Validators.minLength(4)]],
      object:['', [Validators.required]],
      dateDeparture:['', [Validators.required]],
      arrivalDate:['', [Validators.required]],
      price :['', [Validators.required]],

    })
  }
  get getControl(){
    return this.voyagForm.controls;
  }
  onSubmit(){
    this.voyage.destination=this.voyagForm.value.destination;
    this.voyage.object=this.voyagForm.value.object;

    this.voyage.dateDeparture=this.voyagForm.value.dateDeparture;
    this.voyage.arrivalDate=this.voyagForm.value.arrivalDate;
    this.voyage.price=this.voyagForm.value.price;
    this.save();

  }
  save() {
    console.log(this.voyage);

    this.voyageservice.creat(this.voyage).subscribe(data=>{
      this.router.navigate(['liste']);
      console.log(data);
    },error=>console.log(error));
  }
  GoToList(){
    this.router.navigate(['liste']);
  }
}
