import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/demo/service/product.service';
import { FarmService } from 'src/app/demo/service/farm.service';
import { IFarm } from 'src/app/demo/utils/IFarm';

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

        console.log('Edit Farm :: ', farm);
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
        this.farmService.deleteFarm(this.farm._id.toString()).subscribe();

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

    /*saveFarm() {
        this.submitted = true;

        if (this.farm.name?.trim()) {
            if (this.farm._id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus
                    .value
                    ? this.farm.inventoryStatus.value
                    : this.product.inventoryStatus;
                this.products[this.findIndexById(this.product.id)] =
                    this.product;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Updated',
                    life: 3000,
                });
            } else {
                this.product.id = this.createId();
                this.product.code = this.createId();
                this.product.image = 'product-placeholder.svg';
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus
                    ? this.product.inventoryStatus.value
                    : 'INSTOCK';
                this.products.push(this.product);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Created',
                    life: 3000,
                });
            }

            this.products = [...this.products];
            this.farmDialog = false;
            this.product = {};
        }
    }*/

    /*findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.farms.length; i++) {
            if (this.farms[i]._id === id) {
                index = i;
                break;
            }
        }

        return index;
    }*/

    createId(): string {
        let id = '';
        const chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
