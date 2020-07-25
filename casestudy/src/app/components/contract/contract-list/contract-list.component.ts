import { Component, OnInit } from '@angular/core';
import { IContract } from 'src/app/models/IContract';
import { ContractService } from 'src/app/services/contract.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts = new Array<IContract>();
  deletedContract: IContract;
  pickedContract: IContract;
  term: string;
  p: number;

  constructor(
    private contractService: ContractService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.contractService.getAllContracts().subscribe(
      value => (this.contracts = value),
      error => console.error(error)
    );
  }

  chooseDeletedContract(contract: IContract) {
    this.deletedContract = contract;
  }

  pickContract(contract: IContract) {
    this.pickedContract = contract;
  }

  deleteContract() {
    this.contracts = this.contracts.filter(c => c.id !== this.deletedContract.id);
    this.toastr.success('Deleted a contract!');
  }

  pageBoundsChanged(currentTotalPage: number) {
    if (this.p > currentTotalPage) {
      this.p = currentTotalPage;
    }
  }
}
