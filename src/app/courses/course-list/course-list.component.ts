import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  _courses : Course[] = [];
  filteredCourses : Course[] = [];
  _filterBy!: string;
  
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log ('Erro: ', err)
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deletado com Sucesso!.');
        this.retrieveAll();
      },
      error: err => console.log('Error: ', err)
    })
  }

  set filter(value: string){
    this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);

  }

  get filter(){
    return this._filterBy;
  }

}
