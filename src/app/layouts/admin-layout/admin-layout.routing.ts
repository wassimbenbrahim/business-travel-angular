
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
// import { IconsComponent } from '../../pages/icons/icons.component';
// import { MapsComponent } from '../../pages/maps/maps.component';

import { VoyagesComponent } from '../../pages/Voyages/voyages.component';
import { ListevoyageComponent } from 'src/app/pages/liste_voyage/listevoyage.component';
import { VoyageseditComponent } from 'src/app/pages/Voyages-edit/voyagesedit.component';
import { PostComponent } from 'src/app/pages/post/post.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
 
{path:'voyages',component:VoyagesComponent},
{path:'voyag/:id',component:VoyageseditComponent},
{path:'liste',component:ListevoyageComponent},
{path:'posts',component:PostComponent},
 ];
 