import {Component} from 'angular2/core'
import {Course} from './course'
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    //template: `
    //        <h2>Courses</h2>
    //        {{ title }}
    //        <ul>
    //            <li *ngFor="#course of courses">
    //                {{ course }}
    //            </li>
    //        </ul>
    //        `,
    templateUrl: './views/courses.html',
    providers: [CourseService]
})

export class CoursesComponent {
    title = "The title of courses page";
    clickMessage = '';
    courses: Course[];
    favouriteCourse;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
        this.favouriteCourse = courseService.getLoveCourse();
    }

    onClickMe() {
        this.clickMessage = "Xin Chao Bong!";
    }
}