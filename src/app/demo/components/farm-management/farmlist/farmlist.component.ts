import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FarmService } from 'src/app/demo/service/farm.service';
import { IFarm } from 'src/app/demo/utils/IFarm.Management';

@Component({
    templateUrl: './farmlist.component.html',
    providers: [MessageService],
})
export class FarmlistComponent implements OnInit {
    farms: IFarm[] = [];
    farm: IFarm = {};
    cols: any[] = [];

    constructor(
        private messageService: MessageService,
        private farmService: FarmService
    ) {}

    ngOnInit() {
        this.farmService.getFams().subscribe((data) => (this.farms = data));

        this.cols = [
            { field: 'name', header: 'Name', sortable: true, type: 'text' },
            {
                field: 'location',
                header: 'Location',
                sortable: true,
                type: 'text',
            },
            { field: 'owner', header: 'Owner', sortable: true, type: 'text' },
            {
                field: 'contactInformation',
                header: 'Contact Information',
                sortable: true,
                type: 'text',
            },
            {
                field: 'size',
                header: 'Size (Meters)',
                sortable: true,
                type: 'number',
            },
        ];
    }
    handleSaveRow(data: any) {
        const payload = {
            ...data?.rowData,
        };

        if (data.rowData?._id) {
            this.farmService.updateFarm(payload?._id, payload).subscribe();
        } else {
            this.farmService.createFarm(payload).subscribe();
        }
    }
    handleDeleteRow(data: any) {
        this.farmService.deleteFarm(data?._id).subscribe();
    }
}
