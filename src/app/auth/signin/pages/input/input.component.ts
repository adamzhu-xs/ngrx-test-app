import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    @Input() content: any;

    @Output()
    signinAction = new EventEmitter();

    userId = new FormControl('userId');
    password = new FormControl('password');

    constructor() { }

    ngOnInit() {
    }

    signin(user) {
        this.signinAction.emit(user);
    }
}
