import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ChartModule } from 'angular-highcharts';
import { AddDocComponent } from './component/add-doc/add-doc.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DoctorComponent } from './component/doctor/doctor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { PreferenceComponent } from './component/preference/preference.component';
import { PatientComponent } from './component/patient/patient.component';
import { AboutComponent } from './component/about/about.component';
import { AddpatientComponent } from './component/addpatient/addpatient.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ScheduleComponent } from './schedule/schedule.component';
import { DocDetailsComponent } from './component/doc-details/doc-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { DoctorsearchPipe } from './doctorsearch.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    AddDocComponent,
    DoctorComponent,
    PreferenceComponent,
    PatientComponent,
    AboutComponent,
    AddpatientComponent,
    ScheduleComponent,
    DocDetailsComponent,
    SearchPipe,
    DoctorsearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    ChartModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule
  
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
