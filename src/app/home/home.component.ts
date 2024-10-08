import { Component, OnInit } from '@angular/core';
import { categories } from 'src/data/categories';
import { courses } from 'src/data/courses';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = categories;
  courses = courses;

  constructor() { }

  ngOnInit(): void {
  }

}
