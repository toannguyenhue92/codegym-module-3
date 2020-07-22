import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from 'src/app/models/ICustomer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: ICustomer;
  customerDetailForm: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.customerDetailForm = this.formBuilder.group({
      customerCode: [{ value: null, disabled: true }],
      fullName: [{ value: null, disabled: true }],
      birthDate: [{ value: null, disabled: true }],
      gender: [{ value: null, disabled: true }],
      identifier: [{ value: null, disabled: true }],
      telephone: [{ value: null, disabled: true }],
      email: [{ value: null, disabled: true }],
      customerType: [{ value: null, disabled: true }],
      address: [{ value: null, disabled: true }]
    });
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.customerService.getCustomerById(this.id).subscribe(value => {
      this.customer = value;
      this.customerDetailForm.patchValue(this.customer);
    }, error => {
      console.error(error);
    });
  }

  backToCustomerList() {
    this.router.navigateByUrl('/customer');
  }
}
