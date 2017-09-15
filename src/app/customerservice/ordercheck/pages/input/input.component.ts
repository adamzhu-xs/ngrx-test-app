import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    @Input() content: any;
    @Input() inputRes: any;

    constructor() { }

    ngOnInit() {
        console.log('input', this.content, this.inputRes);
    }

}
