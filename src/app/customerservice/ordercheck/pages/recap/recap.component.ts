import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-recap',
    templateUrl: './recap.component.html',
    styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

    @Input() content: any;
    @Input() recapRes: any;

    constructor() { }

    ngOnInit() {
    }

}
