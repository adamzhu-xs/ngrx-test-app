import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    @Input() content: any;
    @Input() inputRes: any;

    @Output()
    submitAction = new EventEmitter();

    quantity = new FormControl('quantity');

    constructor() { }

    ngOnInit() {
    }

    submit(form) {
        this.submitAction.emit(form);
    }

}
