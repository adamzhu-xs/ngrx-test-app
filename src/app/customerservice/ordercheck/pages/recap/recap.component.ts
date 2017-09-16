import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-recap',
    templateUrl: './recap.component.html',
    styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

    @Input() content: any;
    @Input() recapRes: any;

    @Output()
    submitAction = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    submitRecap() {
        this.submitAction.emit({});
    }

}
