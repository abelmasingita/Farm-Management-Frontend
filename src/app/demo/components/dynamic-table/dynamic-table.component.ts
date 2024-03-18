import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IColumn } from '../../utils/IColumns';

@Component({
    selector: 'app-dynamic-table',
    templateUrl: './dynamic-table.component.html',
})
export class DynamicTableComponent implements OnInit {
    @Input() dataSource: any[] = [];
    @Input() selectOptions: any[] = [];
    @Input() columns: IColumn[] = [];
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

    @Output() deleteRowEvent = new EventEmitter<any>();
    @Output() saveRowEvent = new EventEmitter<any>();

    deleteItemsDialog: boolean = false;
    deleteItemDialog: boolean = false;
    rowDialog: boolean = false;
    rowData: any = {};
    selectedOption: any = {};
    selectedDate: Date = null;
    constructor() {}

    ngOnInit() {}

    editRow(rowData: any) {
        this.rowData = { ...rowData };
        this.rowDialog = true;
    }
    openNew() {
        this.rowDialog = true;
        this.rowData = {};
    }
    deleteRow(rowData: any) {
        this.rowData = { ...rowData };
        this.deleteItemDialog = true;
    }

    saveRow() {
        const data = {
            selectedOption: this.selectedOption,
            rowData: this.rowData,
        };
        this.saveRowEvent.emit(data);
        this.rowDialog = false;
    }

    hideDialog() {
        this.rowDialog = false;
    }

    confirmDelete() {
        this.deleteRowEvent.emit(this.rowData);
        this.deleteItemDialog = false;
        this.rowData = {};
        this.dataSource = this.dataSource.filter(
            (val) => val?._id !== this.rowData?._id
        );
    }
}
