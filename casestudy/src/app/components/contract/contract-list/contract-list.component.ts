import { Component, OnInit } from '@angular/core';
import { IContract } from 'src/app/models/IContract';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts = new Array<IContract>();

  constructor(private contractService: ContractService) { }

  ngOnInit() {
    this.contractService.getAllContracts().subscribe(
      value => (this.contracts = value),
      error => console.error(error)
    );
  }

}
