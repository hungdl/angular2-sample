import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {ContactManagerComponent} from './manager.component'
import {KeyUpComponent} from './keyup.component'

@Component({
    selector: 'my-app',
    templateUrl: './views/app.html',
    directives: [CoursesComponent, ContactManagerComponent, KeyUpComponent]
})

export class AppComponent { }
