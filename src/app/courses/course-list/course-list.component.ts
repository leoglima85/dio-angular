import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses : Course[] = [];
  
  _filterBy!: string;
  
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.retrieveAll();
  }

  set filter(value: string){
    this._filterBy = value;
  }

  get filter(){
    return this._filterBy;
  }

}
