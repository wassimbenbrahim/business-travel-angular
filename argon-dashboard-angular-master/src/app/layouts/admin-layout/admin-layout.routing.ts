import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {InvitationComponent} from '../../pages/invitation/invitation.component';
import {AddinvitationComponent} from '../../pages/addinvitation/addinvitation.component';
import {UpdateComponent} from '../../pages/update/update.component';
import {StatistiqueComponent} from '../../pages/statistique/statistique.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
  { path: 'invitation',           component:     InvitationComponent},
  { path: 'addinvitation',           component:     AddinvitationComponent},
  { path: 'update',           component:     UpdateComponent},
  { path: 'statistique',           component:         StatistiqueComponent},


];
