import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  editNewsForm: FormGroup = this.formBuilder.group({
  })
  submitted: Boolean = false;

  //URL_REGEX: RegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

  constructor(private formBuilder: FormBuilder,
    private _news: NewsService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit() {
    this.submitted = true;

    if (!this.editNewsForm.valid) return;

    alert("Not Yet Implemented\n\n" + JSON.stringify(this.editNewsForm.value, null, 4))
  }
  
  get controls() {return this.editNewsForm.controls}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id === null) {
      alert('Please select a valid ID')
      this.router.navigate([""])
      return
    }

    this._news.getNews(id)
    .subscribe((response) => {

      if (response === null) {
        alert('Invalid ID provided. Rerouting');
        this.router.navigate([""])
        return;
      }

      console.log(response)

      this.editNewsForm = this.formBuilder.group({
        title: [response.title, [Validators.required]],
        description: [response.description, [Validators.required]],
        category: ['', [Validators.required]],
        url: ['', [Validators.required]],
        imgUrl: ['', [Validators.required]],
        publishedDate: ['', Validators.required]
      })
    }, (err) => {
      console.log(err)
    })

    
  }

}


