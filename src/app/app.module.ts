import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';
import { EmployeeComponent } from './employee/employee.component';
import { GridsterModule } from 'angular-gridster2';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatIconModule, MatDividerModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatRadioModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatMenuModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    TransactionComponent,
    EmployeeComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GridsterModule,
    MatDividerModule,MatIconModule, 
    MatInputModule, MatSelectModule,
    MatFormFieldModule, MatButtonModule, MatRadioModule, MatCheckboxModule, MatCardModule,
    DragDropModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
