import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeExtends } from 'src/app/classes/home-extends';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends HomeExtends implements OnInit {

  constructor(
    http: HttpClient
  ) {
    super(http);
  }

  ngOnInit(): void {
    console.log(this.http.get(''))
  }
}
