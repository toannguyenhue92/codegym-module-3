import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'customer', component: CustomerListComponent
}, {
  path: 'customer/detail/:id', component: CustomerDetailComponent
}, {
  path: 'customer/create', component: CustomerCreateComponent
}, {
  path: 'customer/edit/:id', component: CustomerEditComponent
}, {
  path: 'staff', component: StaffListComponent
}, {
  path: 'staff/detail/:id', component: StaffDetailComponent
}, {
  path: 'staff/create', component: StaffCreateComponent
}, {
  path: 'staff/edit/:id', component: StaffEditComponent
}, {
  path: 'stay', component: StayListComponent
}, {
  path: 'stay/detail/:id', component: StayDetailComponent
}, {
  path: 'stay/create', component: StayCreateComponent
}, {
  path: 'stay/edit/:id', component: StayEditComponent
}, {
  path: 'contract', component: ContractListComponent
}, {
  path: 'contract/detail/:id', component: ContractDetailComponent
}, {
  path: 'contract/create', component: ContractCreateComponent
}, {
  path: 'contract/edit/:id', component: ContractEditComponent
}, {
  path: '404', component: PageNotFoundComponent
}, {
  path: '**', redirectTo: '/404'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
