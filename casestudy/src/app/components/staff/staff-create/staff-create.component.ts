import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StaffService } from 'src/app/services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})
export class StaffCreateComponent implements OnInit {

  staffCrateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private staffService: StaffService,
    private router: Router) { }

  ngOnInit() {
    this.staffCrateForm = this.formBuilder.group({
      staffCode: [''],
      fullName: [''],
      birthDate: [''],
      gender: [''],
      identifier: [''],
      telephone: [''],
      email: [''],
      educationDegree: [''],
      position: [''],
      salary: ['']
    });
    this.staffCrateForm.patchValue({
      staffCode: 'NV-0001',
      fullName: 'Toan Nguyen',
      birthDate: '1990-01-01',
      gender: 'Male',
      identifier: '123456789',
      telephone: '0919123456',
      email: 'toannguyen.hue92@gmail.com',
      educationDegree: 'Bachelor',
      position: 'Receptionist',
      salary: 300
    });
  }

  createNewStaff() {
    this.staffService.createNewStaff(this.staffCrateForm.value).subscribe(
      value => {
        console.table(value);
        this.router.navigateByUrl('/staff');
      }, error => console.log(error)
    );
  }

}
