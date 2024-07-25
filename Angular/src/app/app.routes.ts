import { Routes } from '@angular/router';
import { ClientManagementComponent } from './client-management/client-management.component';
import { MeetingsManagementComponent } from './meetings-management/meetings-management.component';

export const routes: Routes = [
    {path: 'clientManagement', component: ClientManagementComponent},
    {path: 'meetingsManagement', component: MeetingsManagementComponent},
];
