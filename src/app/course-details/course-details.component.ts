import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, courses } from 'src/data/courses';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

course: Course | undefined;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      //recuperer le parametre id à partir de l'url
      let id = params['id'][0];

      // affecter notre course à l'element id-1 dans notre liste de cours
      this.course = {
        id: id,
        category: courses[id-1].category,
        rate: courses[id-1].rate,
        title: courses[id-1].title,
        duration: courses[id-1].duraton,
        style: courses[id-1].style,
        description: courses[id-1].description,
      };
  });
  }

  ngOnInit(): void {
  }

}
