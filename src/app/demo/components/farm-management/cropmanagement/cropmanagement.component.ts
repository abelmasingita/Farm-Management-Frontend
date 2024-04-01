import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CropService } from 'src/app/demo/service/crop.service';
import { ICrop } from 'src/app/demo/utils/IFarm.Management';

@Component({
    templateUrl: './cropmanagement.component.html',
    providers: [MessageService],
})
export class CropmanagementComponent implements OnInit {
    crops: ICrop[] = [];
    crop: ICrop = {};
    cols: any[] = [];

    constructor(
        private cropservice: CropService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.cropservice.getCrops().subscribe((data) => (this.crops = data));

        this.cols = [
            { field: 'name', header: 'Name', type: 'text' },
            { field: 'variety', header: 'Variety', type: 'text' },
            { field: 'planting_date', header: 'Planting Date', type: 'date' },
            { field: 'harvest_date', header: 'Harvest Date', type: 'date' },
        ];
    }

    handleSaveRow(data: any) {
        const payload = {
            ...data?.rowData,
        };

        if (data.rowData?._id) {
            this.cropservice.updateCrop(payload?._id, payload).subscribe();
        } else {
            this.cropservice.createCrop(payload).subscribe();
        }
    }

    handleDeleteRow(rowData: any) {
        this.cropservice.deleteCrop(rowData?._id).subscribe();

        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Farm Deleted',
            life: 3000,
        });
    }
}
