System.register(['./course'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var course_1;
    var CourseService;
    return {
        setters:[
            function (course_1_1) {
                course_1 = course_1_1;
            }],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    this.courses = [
                        new course_1.Course(1, "Course 1"),
                        new course_1.Course(2, "Course 2"),
                        new course_1.Course(3, "Course 3"),
                        new course_1.Course(4, "Course 4"),
                    ];
                    return this.courses;
                };
                CourseService.prototype.getLoveCourse = function () {
                    return this.courses[0];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map