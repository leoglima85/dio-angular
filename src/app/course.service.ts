import { Injectable } from '@angular/core';
import { Course } from './courses/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  retrieveAll(): Course[]{
    return COURSES;
  }

}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: CLI',
    description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
    duration: 120,
    code: 'XLF-1212',
    rating: 3,
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
},
{
    id: 2,
    name: 'Angular: Forms',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
    duration: 80,
    code: 'DWQ-3412',
    rating: 3.5,
    price: 24.99,
    imageUrl: '/assets/images/forms.png',
},
{
    id: 3,
    name: 'Angular: HTTP',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
    duration: 80,
    code: 'QPL-0913',
    rating: 4.0,
    price: 36.99,
    imageUrl: '/assets/images/http.png',
},
{
    id: 4,
    name: 'Angular: Router',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
    duration: 80,
    code: 'OHP-1095',
    rating: 4.5,
    price: 46.99,
    imageUrl: '/assets/images/router.png',
},
{
    id: 5,
    name: 'Angular: Animations',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
    duration: 80,
    code: 'PWY-9381',
    rating: 5,
    price: 56.99,
    imageUrl: '/assets/images/animations.png',
}
]
    

