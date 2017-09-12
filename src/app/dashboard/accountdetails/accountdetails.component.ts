import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-accountdetails',
    templateUrl: './accountdetails.component.html',
    styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent implements OnInit {
    id: string;
    private sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];

            // In a real app: dispatch action to load the details here.
        });
    }

}
