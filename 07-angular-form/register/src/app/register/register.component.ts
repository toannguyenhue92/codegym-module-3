import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }, this.comparePassword);
  }

  onSubmit() {
    console.table(this.registerForm.value);
  }

  comparePassword(control: AbstractControl) {
    const value = control.value;
    return (value.password === value.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }
}
