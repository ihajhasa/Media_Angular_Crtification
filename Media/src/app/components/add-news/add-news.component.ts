import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  addnewsForm = new FormGroup({
    Title: new FormControl(''),
    Description: new FormControl(""),
    Url : new FormControl(''),
    ImageUrl: new FormControl(''),
    PublishedAt : new FormControl(''),
    Category: new FormControl('')
  });

  addValueToServer(){
    console.log(this.addnewsForm.value);
    this._newsService.postNews(this.addnewsForm.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    )

  }

  constructor(private _newsService:NewsService) { 

  }

  ngOnInit(): void {
  }

}
//  Title , Desciption, Url, UrltoImage,published at, category