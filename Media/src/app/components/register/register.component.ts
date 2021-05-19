import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup = this.formBuilder.group({});
  submitted: Boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    this.submitted = true;
    if (!this.regForm.valid) return;

    alert("Not Yet Implemented");
  }

  get controls() {return this.regForm.controls}

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

}
