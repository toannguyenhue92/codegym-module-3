import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { StaffCreateComponent } from './components/staff/staff-create/staff-create.component';
import { StayCreateComponent } from './components/stay/stay-create/stay-create.component';
import { ContractCreateComponent } from './components/contract/contract-create/contract-create.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    StaffCreateComponent,
    StayCreateComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
