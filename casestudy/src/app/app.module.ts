import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { StayListComponent } from './components/stay/stay-list/stay-list.component';
import { StayCreateComponent } from './components/stay/stay-create/stay-create.component';
import { StayEditComponent } from './components/stay/stay-edit/stay-edit.component';
import { StayDetailComponent } from './components/stay/stay-detail/stay-detail.component';
import { StaffListComponent } from './components/staff/staff-list/staff-list.component';
import { StaffCreateComponent } from './components/staff/staff-create/staff-create.component';
import { StaffEditComponent } from './components/staff/staff-edit/staff-edit.component';
import { StaffDetailComponent } from './components/staff/staff-detail/staff-detail.component';
import { ContractListComponent } from './components/contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './components/contract/contract-create/contract-create.component';
import { ContractEditComponent } from './components/contract/contract-edit/contract-edit.component';
import { ContractDetailComponent } from './components/contract/contract-detail/contract-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    StaffCreateComponent,
    StayCreateComponent,
    ContractCreateComponent,
    CustomerEditComponent,
    CustomerDetailComponent,
    StayListComponent,
    StayEditComponent,
    StayDetailComponent,
    StaffListComponent,
    StaffEditComponent,
    StaffDetailComponent,
    ContractListComponent,
    ContractEditComponent,
    ContractDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
