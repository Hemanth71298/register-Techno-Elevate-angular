import { Usernamevalidators } from './../reactive-form/username.validators';
import { PasswordValidators } from './password-validation';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  rform: any = FormGroup;
  ngOnInit(): void {
    this.rform = new FormGroup({
      fn: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]{3,}')]),
      userName: new FormControl('', [Validators.required, Validators.minLength(3), Usernamevalidators.cannotContainSpace]),
      email: new FormControl('', [Validators.required, Validators.minLength(5),
      Validators.pattern('[a-zA-Z0-9.]{3,}@[a-z]{3,}.[a-z]{2,}')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9.@#$]{8,}')]),
      confirm: new FormControl('', [PasswordValidators.passValidator, Validators.required]),
      mb: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]{10}')]),
      dob: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.minLength(15)])
    });
  }
  get fn() {
    return this.rform.get('fn');
  }
  get ln() {
    return this.rform.get('ln');
  }
  get email() {
    return this.rform.get('email');
  }
  get password() {
    return this.rform.get('password');
  }
  get mb() {
    return this.rform.get('mb');
  }
  get address() {
    return this.rform.get('address');
  }
  get userName() {
    return this.rform.get('userName');
  }
  get confirm() {
    return this.rform.get('confirm');
  }





}
