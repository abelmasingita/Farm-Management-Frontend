import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { FarmService } from 'src/app/demo/service/farm.service';
import { FieldService } from 'src/app/demo/service/field.service';
import { IFarm, IField } from 'src/app/demo/utils/IFarm.Management';

@Component({
    templateUrl: './task.component.html',
    providers: [MessageService],
})
export class TaskComponent implements OnInit {
    fields: IField[] = [];
    field: IField = {};
    farms: IFarm[] = [];

    fieldDialog: boolean = false;

    deleteFieldDialog: boolean = false;

    deleteFieldsDialog: boolean = false;

    selectedFields: IField[] = [];
    selectedFarm: IField = {};

    submitted: boolean = false;

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private messageService: MessageService,
        private fieldService: FieldService,
        private farmService: FarmService
    ) {}

    ngOnInit() {
        this.fieldService.getFields().subscribe((data) => (this.fields = data));
        this.farmService.getFams().subscribe((data) => (this.farms = data));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'cropType', header: 'CropType' },
            { field: 'size', header: 'Size' },
            { field: 'soilType', header: 'SoilType' },
            { field: 'irrigationMethod', header: 'IrrigationMethod' },
        ];
    }

    getFarmName(farmId: string): string {
        const farm = this.farms.find((farm) => farm._id === farmId);
        return farm ? farm.name : 'N/A';
    }

    openNew() {
        this.field = {};
        this.submitted = false;
        this.fieldDialog = true;
    }

    deleteSelectedFields() {
        this.deleteFieldsDialog = true;
    }

    editField(field: IField) {
        this.field = { ...field };
        this.fieldDialog = true;
    }

    deleteField(field: IField) {
        this.deleteFieldDialog = true;
        this.field = { ...field };
    }

    confirmDeleteSelected() {
        this.deleteFieldsDialog = false;
        this.fields = this.fields.filter(
            (val) => !this.selectedFields.includes(val)
        );
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'field Deleted',
            life: 3000,
        });
        this.selectedFields = [];
    }

    confirmDelete() {
        this.deleteFieldDialog = false;
        this.fieldService.deleteField(this.field._id).subscribe();

        this.fields = this.fields.filter((val) => val?._id !== this.field._id);
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Farm Deleted',
            life: 3000,
        });
        this.field = {};
    }

    hideDialog() {
        this.fieldDialog = false;
        this.submitted = false;
    }

    saveFarm() {
        this.submitted = true;
        this.field.farmId = this.selectedFarm._id;

        if (this.field.name?.trim()) {
            if (this.field._id) {
                this.fieldService
                    .updateField(this.field._id.toString(), this.field)
                    .subscribe();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Field Updated',
                    life: 3000,
                });
            } else {
                this.fieldService.createField(this.field).subscribe();

                // @ts-ignore
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Field Created',
                    life: 3000,
                });
            }

            this.fields = [...this.fields];
            this.fieldDialog = false;
            this.field = {};
        }
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
