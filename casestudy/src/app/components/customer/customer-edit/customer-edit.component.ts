import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from 'src/app/models/ICustomer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: ICustomer;
  customerEditForm: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.customerEditForm = this.formBuilder.group({
      customerCode: ['', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]],
      fullName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      identifier: ['', [Validators.required, Validators.pattern('(^[0-9]{9}$)|(^[0-9]{12}$)')]],
      telephone: ['', [Validators.required, Validators.pattern('^(0|\\(84\\)\\+)9[01][0-9]{7}$')]],
      email: ['', [Validators.required, Validators.email]],
      customerType: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.customerService.getCustomerById(this.id).subscribe(value => {
      this.customer = value;
      this.customerEditForm.patchValue(this.customer);
    }, error => {
      console.error(error);
    });
  }

  get customerCode() {
    return this.customerEditForm.get('customerCode');
  }

  get fullName() {
    return this.customerEditForm.get('fullName');
  }

  get birthDate() {
    return this.customerEditForm.get('birthDate');
  }

  get gender() {
    return this.customerEditForm.get('gender');
  }

  get identifier() {
    return this.customerEditForm.get('identifier');
  }

  get telephone() {
    return this.customerEditForm.get('telephone');
  }

  get email() {
    return this.customerEditForm.get('email');
  }

  get customerType() {
    return this.customerEditForm.get('customerType');
  }

  get address() {
    return this.customerEditForm.get('address');
  }

  updateCustomer() {
    if (this.customerEditForm.valid) {
      this.customer = this.customerEditForm.value as ICustomer;
      this.customer.id = this.id;
      this.customerService.updateCustomer(this.customer).subscribe(value => {
        console.table(value);
        this.router.navigateByUrl('/customer');
      }, error => {
        console.log(error);
      });
    }
  }
}
