import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import { Erro404Component } from './core/component/erro404/erro404.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CourseInfoComponent } from './courses/course-info/course-info.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StarModule } from './Shared/componet/star/star.module';
import { AppPipeModule } from './Shared/pipe/app-pipe.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseInfoComponent,
    CourseListComponent,
    Erro404Component,
    
  ],
  imports: [
    BrowserModule,
    StarModule,
    CoreModule,
    AppPipeModule,
    AppRoutingModule,    
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
