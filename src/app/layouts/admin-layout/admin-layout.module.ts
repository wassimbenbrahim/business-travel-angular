import { ListevoyageComponent } from './../../pages/liste_voyage/listevoyage.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
// import { IconsComponent } from '../../pages/icons/icons.component';
// import { MapsComponent } from '../../pages/maps/maps.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VoyagesComponent } from '../../pages/Voyages/voyages.component';
import { VoyageseditComponent } from 'src/app/pages/Voyages-edit/voyagesedit.component';
import { PostComponent } from 'src/app/pages/post/post.component';


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    
    
    VoyagesComponent,
    ListevoyageComponent,
    VoyageseditComponent,
    PostComponent
    
  ]
})

export class AdminLayoutModule {}
