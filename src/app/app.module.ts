import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursListComponent } from './cours-list/cours-list.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailsComponent,
    CoursListComponent,
    LeftSidebarComponent,
    RightSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
