import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  lat = 40.7512177;
  lng = -73.9784873;

  constructor() { }

  ngOnInit(): void {
  }

}
