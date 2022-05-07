import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Voyages } from 'src/app/Constructor/Voyages';
import { VoyageserviceService } from 'src/app/SERVICE/voyageservice.service';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyagesedit.component.html',
  styleUrls: ['./voyagesedit.component.scss']
})
export class VoyageseditComponent implements OnInit {
  voyage :Voyages=new Voyages()
  voyagForm:FormGroup;
  id:any;
  constructor(private datePipe: DatePipe,public formBuilder:FormBuilder,private voyageservice:VoyageserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)

    this.voyagForm=this.formBuilder.group({
      destination:['',, [Validators.required, Validators.minLength(4)]],
      object:['', [Validators.required]],
      dateDeparture:['', [Validators.required],this.transformData(this.voyage.dateDeparture)],
      datear:['', [Validators.required]],
      price :['', [Validators.required]],

    })
    this.voyageservice.getById(this.id).subscribe(data=>{
      this.voyage.dateDeparture=date
    
      var da=data['dateDeparture'];
      var date = this.transformData(data['dateDeparture']);
      console.log(date)

      this.voyagForm.patchValue(data)
      console.log(data)
    },error=>console.log(error));
  }
  transformData(Date){
    return this.datePipe.transform(Date,'MM/dd/yyyy')

  }
  get getControl(){
    return this.voyagForm.controls;
  }
  onSubmit(){
    this.voyageservice.update(this.voyagForm.value,this.id).subscribe(data=>{
      console.log(data);
    },error=>console.log(error));


  }

  GoToList(){
    this.router.navigate(['liste']);
  }

}
