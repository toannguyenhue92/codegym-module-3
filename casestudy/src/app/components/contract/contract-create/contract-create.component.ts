import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractCreateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contractService: ContractService,
    private router: Router) { }

  ngOnInit() {
    this.contractCreateForm = this.formBuilder.group({
      stayServiceCode: [''],
      customerCode: [''],
      checkInDate: [''],
      checkOutDate: [''],
      deposit: [''],
      totalCost: ['']
    });
    this.contractCreateForm.patchValue({
      stayServiceCode: 'KH-0001',
      customerCode: 'NV-0001',
      checkInDate: '2020-08-01',
      checkOutDate: '2020-08-04',
      deposit: '50',
      totalCost: '399'
    });
  }

  createNewContract() {
    this.contractService.createNewContract(this.contractCreateForm.value)
      .subscribe(
        value => console.table(value),
        error => console.error(error)
      );
  }
}
