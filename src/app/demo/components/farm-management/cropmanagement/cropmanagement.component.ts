import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CropService } from 'src/app/demo/service/crop.service';
import { ICrop } from 'src/app/demo/utils/IFarm.Management';

@Component({
    templateUrl: './cropmanagement.component.html',
    providers: [MessageService],
})
export class CropmanagementComponent implements OnInit {
    CropDialog: boolean = false;

    deleteCropDialog: boolean = false;

    deleteCropsDialog: boolean = false;

    crops: ICrop[] = [];

    crop: ICrop = {};

    selectedcrops: ICrop[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private cropservice: CropService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.cropservice.getCrops().subscribe((data) => (this.crops = data));

        this.cols = [
            { field: 'name', header: 'Name',type: 'text' },
            { field: 'variety', header: 'Variety' ,type: 'text'},
            { field: 'planting_date', header: 'Planting Date' ,type: 'date'},
            { field: 'harvest_date', header: 'Harvest Date',type: 'date' },
        ];
    }

    openNew() {
        this.crop = {};
        this.submitted = false;
        this.CropDialog = true;
    }

    deleteSelectedcrops() {
        this.deleteCropsDialog = true;
    }

    editCrop(Crop: ICrop) {
        this.crop = { ...Crop };
        this.CropDialog = true;
    }

    deleteCrop(Crop: ICrop) {
        this.deleteCropDialog = true;
        this.crop = { ...Crop };
    }

    confirmDeleteSelected() {
        this.deleteCropsDialog = false;
        this.crops = this.crops.filter(
            (val) => !this.selectedcrops.includes(val)
        );
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'crops Deleted',
            life: 3000,
        });
        this.selectedcrops = [];
    }

    confirmDelete() {
        this.deleteCropDialog = false;
        this.cropservice.deleteCrop(this.crop._id).subscribe();
        this.crops = this.crops.filter((val) => val._id !== this.crop._id);
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Crop Deleted',
            life: 3000,
        });
        this.crop = {};
    }

    hideDialog() {
        this.CropDialog = false;
        this.submitted = false;
    }

    saveCrop() {
        this.submitted = true;

        if (this.crop.name?.trim()) {
            if (this.crop._id) {
                // @ts-ignore
                this.cropservice
                    .updateCrop(this.crop._id, this.crop)
                    .subscribe();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Crop Updated',
                    life: 3000,
                });
            } else {
                this.cropservice.createCrop(this.crop).subscribe();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Crop Created',
                    life: 3000,
                });
            }

            this.crops = [...this.crops];
            this.CropDialog = false;
            this.crop = {};
        }
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }

    handleEditRow(rowData: any) {
        // Handle the edit row event
        /*console.log('Edit row event:', rowData);
        this.farmService
        .updateFarm(this.farm._id, this.farm)
        .subscribe();

        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Farm Updated',
            life: 3000,
        });*/
    }

    handleDeleteRow(rowData: any) {
        //this.farmService.deleteFarm(rowData?._id).subscribe();

        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Farm Deleted',
            life: 3000,
        });
    }
}
