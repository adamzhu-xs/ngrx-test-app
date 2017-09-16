import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-account-row',
    templateUrl: './account-row.component.html',
    styleUrls: ['./account-row.component.scss']
})
export class AccountRowComponent implements OnInit {

    @Input() content: any;
    @Input() account: any;

    constructor() { }

    ngOnInit() {
    }

}
