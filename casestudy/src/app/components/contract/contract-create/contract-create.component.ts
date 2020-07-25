import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { StayService } from 'src/app/services/stay.service';
import { IContract } from 'src/app/models/IContract';
import { StayValidator } from 'src/app/validators/StayValidator';
import { CustomerValidator } from 'src/app/validators/CustomerValidator';
import { ContractValidator } from 'src/app/validators/ContractValidator';
import { ToastrService } from 'ngx-toastr';
import { differenceInDays } from 'date-fns';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractCreateForm: FormGroup;
  deletedContract: IContract;

  constructor(
    private formBuilder: FormBuilder,
    private contractService: ContractService,
    private customerService: CustomerService,
    private stayService: StayService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.contractCreateForm = this.formBuilder.group({
      stayServiceCode: ['', [Validators.required], [StayValidator.codeNotExist(this.stayService)]],
      customerCode: ['', [Validators.required], [CustomerValidator.codeNotExist(this.customerService)]],
      checkInDate: ['', [Validators.required, ContractValidator.checkInDate]],
      checkOutDate: ['', [Validators.required]],
      deposit: ['', [Validators.required, Validators.min(0)]],
      totalCost: ['', [Validators.required, Validators.min(0)]]
    }, { validators: ContractValidator.checkOutDate });
  }

  get stayServiceCode() {
    return this.contractCreateForm.get('stayServiceCode');
  }

  get customerCode() {
    return this.contractCreateForm.get('customerCode');
  }

  get checkInDate() {
    return this.contractCreateForm.get('checkInDate');
  }

  get checkOutDate() {
    return this.contractCreateForm.get('checkOutDate');
  }

  get deposit() {
    return this.contractCreateForm.get('deposit');
  }

  get totalCost() {
    return this.contractCreateForm.get('totalCost');
  }

  createNewContract() {
    const newContract = {
      stayId: 0,
      customerId: 0,
      checkInDate: this.checkInDate.value,
      checkOutDate: this.checkOutDate.value,
      deposit: this.deposit.value,
      totalCost: this.totalCost.value
    } as Partial<IContract>;
    const getCustomerByCode = this.customerService.getCustomerByCode(this.customerCode.value);
    const getStayServiceByCode = this.stayService.getStayServiceByCode(this.stayServiceCode.value);
    const createNewContract = this.contractService.createNewContract(newContract);
    getCustomerByCode.subscribe(customers => {
      if (customers.length !== 0) {
        newContract.customerId = customers[0].id;
        getStayServiceByCode.subscribe(stays => {
          if (stays.length !== 0) {
            newContract.stayId = stays[0].id;
            createNewContract.subscribe(
              contract => {
                console.table(contract);
                this.toastr.success(`Created new contract for customer ${customers[0].fullName}!`);
                this.router.navigateByUrl('/contract');
              },
              error => console.error(error)
            );
          }
        });
      }
    });
  }

  calculateTotalCost() {
    this.stayService.getStayServiceByCode(this.stayServiceCode.value).subscribe(
      stays => {
        if (stays.length > 0) {
          const inDate = new Date(this.checkInDate.value);
          const outDate = new Date(this.checkOutDate.value);
          const depositAmount = Number(this.deposit.value);
          const totalCostAmount = differenceInDays(outDate, inDate) * stays[0].rentalCost - depositAmount;
          this.totalCost.setValue(totalCostAmount);
        }
      }
    );
  }
}
