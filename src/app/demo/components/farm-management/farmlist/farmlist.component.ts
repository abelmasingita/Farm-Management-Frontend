import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { FarmService } from 'src/app/demo/service/farm.service';
import { IFarm } from 'src/app/demo/utils/IFarm.Management';

@Component({
    templateUrl: './farmlist.component.html',
    providers: [MessageService],
})
export class FarmlistComponent implements OnInit {
    farms: IFarm[] = [];
    farm: IFarm = {};

    farmDialog: boolean = false;

    deleteFarmDialog: boolean = false;

    deleteFarmsDialog: boolean = false;

    selectedFarms: IFarm[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

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

    openNew() {
        this.farm = {};
        this.submitted = false;
        this.farmDialog = true;
    }

    deleteSelectedFarms() {
        this.deleteFarmsDialog = true;
    }

    editFarm(farm: IFarm) {
        this.farm = { ...farm };
        this.farmDialog = true;
    }

    deleteFarm(farm: IFarm) {
        this.deleteFarmDialog = true;
        this.farm = { ...farm };
    }

    confirmDeleteSelected() {
        this.deleteFarmsDialog = false;
        this.farms = this.farms.filter(
            (val) => !this.selectedFarms.includes(val)
        );
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Farms Deleted',
            life: 3000,
        });
        this.selectedFarms = [];
    }

    hideDialog() {
        this.farmDialog = false;
        this.submitted = false;
    }

    saveFarm() {
        this.submitted = true;

        if (this.farm.name?.trim()) {
            if (this.farm._id) {
                this.farmService
                    .updateFarm(this.farm._id, this.farm)
                    .subscribe();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Farm Updated',
                    life: 3000,
                });
            } else {
                this.farmService.createFarm(this.farm).subscribe();

                // @ts-ignore
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Farm Created',
                    life: 3000,
                });
            }

            this.farms = [...this.farms];
            this.farmDialog = false;
            this.farm = {};
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
