import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'app',
    template: '<h1>Hello {{name}}!</h1>'
})
class App {
    name: string;

    constructor(){
        this.name = 'Angular2';
        setTimeout(() => {
            this.name = 'Boy'
        }, 1000);
    }
}

bootstrap(App);