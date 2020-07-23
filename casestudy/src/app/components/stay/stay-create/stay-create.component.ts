import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'app-stay-create',
  templateUrl: './stay-create.component.html',
  styleUrls: ['./stay-create.component.css']
})
export class StayCreateComponent implements OnInit {

  stayServiceCreateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private stayService: StayService,
    private router: Router) { }

  ngOnInit() {
    this.stayServiceCreateForm = this.formBuilder.group({
      stayServiceCode: ['', [Validators.required, Validators.pattern(/^DV-[0-9]{4}$/)]],
      stayServiceType: ['Unknown', [Validators.required]],
      area: ['', [Validators.required, Validators.min(50)]],
      rentalCost: ['', [Validators.required, Validators.min(1), Validators.max(99999999)]],
      maxGuest: ['', [Validators.required, Validators.min(1), Validators.max(8)]],
      rentalType: ['Unknown', [Validators.required]],
      standard: ['', [Validators.required]],
      description: ['', [Validators.required]],
      numberOfFloors: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      poolArea: ['', [Validators.required, Validators.min(20), Validators.max(1000)]]
    });
    this.stayServiceCreateForm.patchValue({
      stayServiceCode: 'DV-0001',
      stayServiceType: 'House',
      area: 100,
      rentalCost: 299,
      maxGuest: 4,
      rentalType: 'Days',
      standard: 'Normal',
      description: 'Seaview',
      numberOfFloors: 2,
      poolArea: 0
    });
  }

  get stayServiceCode() {
    return this.stayServiceCreateForm.get('stayServiceCode');
  }

  get stayServiceType() {
    return this.stayServiceCreateForm.get('stayServiceType');
  }

  get area() {
    return this.stayServiceCreateForm.get('area');
  }

  get rentalCost() {
    return this.stayServiceCreateForm.get('rentalCost');
  }

  get maxGuest() {
    return this.stayServiceCreateForm.get('maxGuest');
  }

  get rentalType() {
    return this.stayServiceCreateForm.get('rentalType');
  }

  get standard() {
    return this.stayServiceCreateForm.get('standard');
  }

  get description() {
    return this.stayServiceCreateForm.get('description');
  }

  get numberOfFloors() {
    return this.stayServiceCreateForm.get('numberOfFloors');
  }

  get poolArea() {
    return this.stayServiceCreateForm.get('poolArea');
  }

  createStayService() {
    console.log(this.stayServiceCreateForm.value);
    if (this.stayServiceCreateForm.valid) {
      this.stayService.createStayService(this.stayServiceCreateForm.value)
        .subscribe(value => {
          console.table(value);
          this.router.navigateByUrl('/stay');
        }, error => {
          console.log(error);
        });
    }
  }
}
