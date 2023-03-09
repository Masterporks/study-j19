import {NgModule} from "@angular/core";
import {SchoolDashboardComponent} from "./school-dashboard/school-dashboard.component";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import { CreateSchoolComponent } from './create-school/create-school.component';
import { SchoolSnackSnackbarComponent } from './school-snack-snackbar/school-snack-snackbar.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    SchoolDashboardComponent,
    CreateSchoolComponent,
    SchoolSnackSnackbarComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule
  ]
})
export class SchoolModule { }
