import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { StaffCreateComponent } from './components/staff/staff-create/staff-create.component';
import { StayCreateComponent } from './components/stay/stay-create/stay-create.component';
import { ContractCreateComponent } from './components/contract/contract-create/contract-create.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'customer', component: CustomerListComponent
}, {
  path: 'customer/detail/:id', component: CustomerDetailComponent
},{
  path: 'customer/create', component: CustomerCreateComponent
}, {
  path: 'customer/edit/:id', component: CustomerEditComponent
}, {
  path: 'staff/create', component: StaffCreateComponent
}, {
  path: 'stay/create', component: StayCreateComponent
}, {
  path: 'contract/create', component: ContractCreateComponent
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
