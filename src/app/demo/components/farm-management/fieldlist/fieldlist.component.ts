import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FarmService } from 'src/app/demo/service/farm.service';
import { FieldService } from 'src/app/demo/service/field.service';
import { IColumn } from 'src/app/demo/utils/IColumns';
import { IFarm, IField } from 'src/app/demo/utils/IFarm.Management';
import { forkJoin, map } from 'rxjs';

@Component({
    templateUrl: './fieldlist.component.html',
    providers: [MessageService],
})
export class FieldlistComponent implements OnInit {
    fields: IField[] = [];
    farms: IFarm[] = [];
    cols: IColumn[] = [];

    constructor(
        private messageService: MessageService,
        private fieldService: FieldService,
        private farmService: FarmService
    ) {}

    ngOnInit() {
        forkJoin({
            farms: this.farmService.getFams(),
            fields: this.fieldService.getFields(),
        })
            .pipe(
                map(({ farms, fields }) => {
                    const updatedFields = fields.map((field) => {
                        const farm = farms.find((f) => f._id === field.farmId);
                        return {
                            ...field,
                            farmId: farm ? farm.name : '',
                        };
                    });
                    return { farms, updatedFields };
                })
            )
            .subscribe(({ farms, updatedFields }) => {
                this.fields = updatedFields;
                this.farms = farms;
            });

        this.cols = [
            { field: 'farmId', header: 'Farm', type: 'select' },
            { field: 'name', header: 'Name', type: 'text' },
            { field: 'cropType', header: 'Crop Type', type: 'text' },
            { field: 'size', header: 'Size', type: 'number' },
            { field: 'soilType', header: 'Soil Type', type: 'text' },
            {
                field: 'irrigationMethod',
                header: 'Irrigation Method',
                type: 'text',
            },
        ];
    }

    handleDeleteRow(data: any) {
        this.fieldService.deleteField(data?._id).subscribe();
    }

    handleSaveRow(data: any) {
        const payload = {
            ...data?.rowData,
            farmId: data.rowData?.farmId?._id,
        };

        if (data.rowData?._id) {
            this.fieldService.updateField(payload?._id, payload).subscribe();
        } else {
            this.fieldService.createField(payload).subscribe();
        }
    }
}
