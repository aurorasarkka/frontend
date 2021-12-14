import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {F} from "@angular/cdk/keycodes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  profileForm: FormGroup;


  constructor(private router: Router) {
    this.profileForm = new FormGroup(
      {
        firstName: new FormControl('Anna', [Validators.required, Validators.minLength(2)]),
        lastName: new FormControl('Nieminen', [Validators.required, Validators.minLength(2)]),
        Email: new FormControl('anna.nieminen@gmail.com', [Validators.required, Validators.minLength(2)]),
        PassWord: new FormControl('', [Validators.required, Validators.minLength(2)])
      });
  }

  ngOnInit(): void {
  }


  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get Email() {
    return this.profileForm.get('Email')
  }

  get PassWord() {
    return this.profileForm.get('PassWord')
  }

  submitForm() {
    console.log('Form Submitted with value: ', this.profileForm.value);

  }
}




