import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

    @Input() content: any;
    @Input() confirmRes: any;

    @Output()
    submitAction = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    anotherOrder() {
        this.submitAction.emit({});
    }

}
