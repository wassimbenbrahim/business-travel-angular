import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {InvitationComponent} from '../../pages/invitation/invitation.component';
import {AddinvitationComponent} from '../../pages/addinvitation/addinvitation.component';
import {UpdateComponent} from '../../pages/update/update.component';
import {StatistiqueComponent} from '../../pages/statistique/statistique.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


// import { ToastrModule } from 'ngx-toastr';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        Ng2SearchPipeModule
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    InvitationComponent,
    AddinvitationComponent,
    UpdateComponent,
    StatistiqueComponent
  ]
})

export class AdminLayoutModule {}
