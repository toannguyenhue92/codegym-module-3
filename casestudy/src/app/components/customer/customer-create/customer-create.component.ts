import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from 'src/app/models/ICustomer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerCreateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
    this.customerCreateForm = this.formBuilder.group({
      fullName: [''],
      birthDate: [''],
      gender: [''],
      identifier: [''],
      telephone: [''],
      email: [''],
      customerType: [''],
      address: ['']
    });
  }

  createNewCustomer() {
    const customer: ICustomer = this.customerCreateForm.value;
    this.customerService.createNewCustomer(customer).subscribe(value => {
      console.log(value);
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('/customer');
    });
  }
}
