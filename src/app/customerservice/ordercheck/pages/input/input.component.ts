import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {

    @Input() content: any;
    @Input() inputRes: any;

    @Output()
    submitAction = new EventEmitter();

    ordercheckForm: FormGroup;

    constructor(
        private _changeDetectionRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        const quantity = new FormControl('quantity',
            [Validators.required, Validators.pattern('[0-9]*')]);

        this.ordercheckForm = new FormGroup({
            quantity
        });
    }

    ngAfterViewInit(): void {
        this._changeDetectionRef.detectChanges();
    }

    isFieldValid(fieldName) {
        return this.ordercheckForm.controls[fieldName].valid
            || this.ordercheckForm.controls[fieldName].untouched;
    }

    getError(fieldName) {
        return this.ordercheckForm.controls[fieldName].errors;
    }

    submit(form) {
        if (!this.ordercheckForm.valid) {
            return;
        }

        this.submitAction.emit(form);
    }

}
