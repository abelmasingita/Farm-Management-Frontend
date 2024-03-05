import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-dynamic-table',
    templateUrl: './dynamic-table.component.html',
})
export class DynamicTableComponent implements OnInit {
    @Input() dataSource: any[] = [];
    @Input() columns: any[] = [];
    @Input() selectionMode: string = 'multiple';
    @Input() selection: any[] = [];
    @Input() rowHover: boolean = true;
    @Input() paginator: boolean = true;
    @Input() showEditButton: boolean = true;
    @Input() showDeleteButton: boolean = true;
    @Input() rowsPerPageOptions: number[] = [10, 20, 30];
    @Input() globalFilterFields: string[] = [];
    @Input() showCurrentPageReport: boolean = true;
    @Input() currentPageReportTemplate: string =
        'Showing {first} to {last} of {totalRecords} entries';
    @Input() dataKey: string = '_id';
    @Input() responsiveLayout: string = 'scroll';
    @Input() title: string;

    @Output() editRowEvent = new EventEmitter<any>();
    @Output() deleteRowEvent = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    editRow(rowData: any) {
        this.editRowEvent.emit(rowData);
    }

    deleteRow(rowData: any) {
        this.deleteRowEvent.emit(rowData);
    }
}
