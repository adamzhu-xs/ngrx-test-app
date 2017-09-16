import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-details-panel',
    templateUrl: './details-panel.component.html',
    styleUrls: ['./details-panel.component.scss']
})
export class DetailsPanelComponent implements OnInit {

    @Input() content: any;
    @Input() account: any;

    constructor() { }

    ngOnInit() {
    }

}
