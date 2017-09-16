import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

    @Input() content: any;
    @Input() data: any;

    constructor() { }

    ngOnInit() {
    }

}
