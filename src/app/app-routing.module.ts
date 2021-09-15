import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseInfoComponent } from './courses/course-info/course-info.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { Erro404Component } from './core/component/erro404/erro404.component';

const routes: Routes = [
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  { path: 'cursos', component: CourseListComponent },
  { path: 'cursos/info/:id', component: CourseInfoComponent },
  { path: '**', component: Erro404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
