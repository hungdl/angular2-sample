import {Course} from './course'
export class CourseService {
    courses: Course[];

    getCourses(): Course[] {
        this.courses = [
            new Course(1, "Course 1"),
            new Course(2, "Course 2"),
            new Course(3, "Course 3"),
            new Course(4, "Course 4"),
        ];
        return this.courses;
    }

    getLoveCourse(): Course {
        return this.courses[0];
    }
}