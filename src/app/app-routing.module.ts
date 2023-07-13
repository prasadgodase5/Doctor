import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { AddDocComponent } from './component/add-doc/add-doc.component';
import { PreferenceComponent } from './component/preference/preference.component';
import { PatientComponent } from './component/patient/patient.component';
import { AboutComponent } from './component/about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DocDetailsComponent } from './component/doc-details/doc-details.component';

const routes: Routes = [
  {path:'',redirectTo:'dash',pathMatch:'full'},
  {path:'dash',component:DashboardComponent},
  {path:'sche',component:ScheduleComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'adddoc',component:AddDocComponent},
  {path:'pre',component:PreferenceComponent},
  {path:'patient',component:PatientComponent},
  {path:'about',component:AboutComponent},
  {path:'details',component:DocDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
