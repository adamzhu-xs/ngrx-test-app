import { Component, OnInit, Input } from '@angular/core';

import { AccountSummaryService } from '../../accountsummary.services';

@Component({
    selector: 'app-category-row',
    templateUrl: './category-row.component.html',
    styleUrls: ['./category-row.component.scss']
})
export class CategoryRowComponent implements OnInit {

    @Input() content: any;
    @Input() category: any;
    opened = false;

    accounts: any[];
    error: any;

    constructor(
        private service: AccountSummaryService
    ) { }

    ngOnInit() {
    }

    toggleCategory(category) {
        this.opened = !this.opened;
        if (this.opened && !this.accounts) {
            this.getAccounts(category);
        }
    }

    getAccounts(category) {
        this.service.getAccounts(category)
            .subscribe(res => {
                this.accounts = res.accounts;
            }, err => {
                this.error = err;
            });
    }
}
