import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  editNewsForm: FormGroup = this.formBuilder.group({})
  submitted: Boolean = false;

  //URL_REGEX: RegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    this.submitted = true;

    if (!this.editNewsForm.valid) return;

    alert("Not Yet Implemented\n\n" + JSON.stringify(this.editNewsForm.value, null, 4))
  }
  
  get controls() {return this.editNewsForm.controls}

  ngOnInit(): void {
    this.editNewsForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      category: ["", [Validators.required]],
      url: ["", [Validators.required]],
      imgUrl: ["", [Validators.required]],
      publishedDate: [null, Validators.required]
    })
  }

}
