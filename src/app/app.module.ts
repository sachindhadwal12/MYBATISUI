import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './Components/header/header.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import { EmplomenthistoryComponent } from './Components/emplomenthistory/emplomenthistory.component';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EditComponent } from './Components/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    EmplomenthistoryComponent,
    EditComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTooltipModule,
    OrderModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
