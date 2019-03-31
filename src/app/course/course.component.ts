import { Component, OnInit } from '@angular/core';
import { CoursesService } from './CoursesService'
@Component({
  selector: 'Authors',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourse();
   }

  ngOnInit() {
  }

}
