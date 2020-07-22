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
      customerCode: ['', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]],
      fullName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      gender: ['Unknown', [Validators.required]],
      identifier: ['', [Validators.required, Validators.pattern('(^[0-9]{9}$)|(^[0-9]{12}$)')]],
      telephone: ['', [Validators.required, Validators.pattern('^(0|\\(84\\)\\+)9[01][0-9]{7}$')]],
      email: ['', [Validators.required, Validators.email]],
      customerType: ['Unknown', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  get customerCode() {
    return this.customerCreateForm.get('customerCode');
  }

  get fullName() {
    return this.customerCreateForm.get('fullName');
  }

  get birthDate() {
    return this.customerCreateForm.get('birthDate');
  }

  get gender() {
    return this.customerCreateForm.get('gender');
  }

  get identifier() {
    return this.customerCreateForm.get('identifier');
  }

  get telephone() {
    return this.customerCreateForm.get('telephone');
  }

  get email() {
    return this.customerCreateForm.get('email');
  }

  get customerType() {
    return this.customerCreateForm.get('customerType');
  }

  get address() {
    return this.customerCreateForm.get('address');
  }

  createNewCustomer() {
    if (this.customerCreateForm.valid) {
      const customer: ICustomer = this.customerCreateForm.value;
      this.customerService.createNewCustomer(customer).subscribe(value => {
        console.log(value);
      }, error => {
        console.log(error);
      }, () => {
        console.log('Customer created!');
        this.router.navigateByUrl('/customer');
      });
    }
  }

}
