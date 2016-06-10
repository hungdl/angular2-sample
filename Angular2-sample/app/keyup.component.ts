import {Component} from 'angular2/core'

@Component({
    selector: 'keyup',
    templateUrl: './views/keyup.html'
})

export class KeyUpComponent {
    values = '';

    //onKey(event: any) {
    //    this.values += event.target.value + ' | ';
    //}

    onKey(value: string) {
        this.values += value + ' | ';
    }
}
