import { Component, OnInit } from '@angular/core';
import { IStaff } from 'src/app/models/IStaff';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  staffs = new Array<IStaff>();

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.staffService.getAllStaffs().subscribe(value => (this.staffs = value));
  }

}
