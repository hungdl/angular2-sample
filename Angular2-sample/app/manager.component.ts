import {Component} from 'angular2/core'

@Component({
    selector: 'contact-manager',
    templateUrl: './views/contact-manager.html'
})

export class ContactManagerComponent {
    title: string;
    constructor() {
        this.title = "Contact Manager";
    }
}