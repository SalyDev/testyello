import { Component, OnInit } from '@angular/core';
import { categories } from 'src/data/categories';
import { courses } from 'src/data/courses';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.scss']
})
export class CoursListComponent implements OnInit {

  categories = categories;
  courses = courses;
  constructor() { }

  ngOnInit(): void {
  }

}
