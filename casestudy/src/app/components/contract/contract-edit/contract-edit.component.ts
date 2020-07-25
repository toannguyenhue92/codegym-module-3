import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContractService } from 'src/app/services/contract.service';
import { CustomerService } from 'src/app/services/customer.service';
import { StayService } from 'src/app/services/stay.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StayValidator } from 'src/app/validators/StayValidator';
import { CustomerValidator } from 'src/app/validators/CustomerValidator';
import { ContractValidator } from 'src/app/validators/ContractValidator';
import { IContract } from 'src/app/models/IContract';
import { differenceInDays } from 'date-fns';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  contractEditForm: FormGroup;
  contract: IContract;

  constructor(
    private formBuilder: FormBuilder,
    private contractService: ContractService,
    private customerService: CustomerService,
    private stayService: StayService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.contractEditForm = this.formBuilder.group({
      stayServiceCode: ['', [Validators.required], [StayValidator.codeNotExist(this.stayService)]],
      customerCode: ['', [Validators.required], [CustomerValidator.codeNotExist(this.customerService)]],
      checkInDate: ['', [Validators.required, ContractValidator.checkInDate]],
      checkOutDate: ['', [Validators.required]],
      deposit: ['', [Validators.required, Validators.min(1)]],
      totalCost: ['', [Validators.required]]
    }, { validators: ContractValidator.checkOutDate });
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.contractService.getContractById(id).subscribe(c => {
      this.contract = c;
      this.contractEditForm.patchValue({
        stayServiceCode: this.contract.stay.stayServiceCode,
        customerCode: this.contract.customer.customerCode,
        checkInDate: this.contract.checkInDate,
        checkOutDate: this.contract.checkOutDate,
        deposit: this.contract.deposit,
        totalCost: this.contract.totalCost
      });
    });
  }

  get stayServiceCode() {
    return this.contractEditForm.get('stayServiceCode');
  }

  get customerCode() {
    return this.contractEditForm.get('customerCode');
  }

  get checkInDate() {
    return this.contractEditForm.get('checkInDate');
  }

  get checkOutDate() {
    return this.contractEditForm.get('checkOutDate');
  }

  get deposit() {
    return this.contractEditForm.get('deposit');
  }

  get totalCost() {
    return this.contractEditForm.get('totalCost');
  }

  editContract() {
    const editContract = {
      id: this.contract.id,
      stayId: 0,
      customerId: 0,
      checkInDate: this.checkInDate.value,
      checkOutDate: this.checkOutDate.value,
      deposit: this.deposit.value,
      totalCost: this.totalCost.value
    } as Partial<IContract>;
    const getCustomerByCode = this.customerService.getCustomerByCode(this.customerCode.value);
    const getStayServiceByCode = this.stayService.getStayServiceByCode(this.stayServiceCode.value);
    const updateContract = this.contractService.updateContract(editContract);
    getCustomerByCode.subscribe(customers => {
      if (customers.length !== 0) {
        editContract.customerId = customers[0].id;
        getStayServiceByCode.subscribe(stays => {
          if (stays.length !== 0) {
            editContract.stayId = stays[0].id;
            updateContract.subscribe(
              () => {
                this.toastr.success('Updated successful!');
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
