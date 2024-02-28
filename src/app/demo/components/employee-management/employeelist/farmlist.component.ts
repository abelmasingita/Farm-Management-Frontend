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
            { field: 'name', header: 'Product' },
            { field: 'location', header: 'Price' },
            { field: 'owner', header: 'Category' },
            { field: 'contactInformation', header: 'Reviews' },
            { field: 'size', header: 'Status' },
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

    confirmDelete() {
        this.deleteFarmDialog = false;
        this.farmService.deleteFarm(this.farm._id).subscribe();

        this.farms = this.farms.filter((val) => val?._id !== this.farm._id);
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Farm Deleted',
            life: 3000,
        });
        this.farm = {};
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
}
