import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmployeeService } from 'src/app/demo/service/employee.service';
import { IEmployee } from 'src/app/demo/utils/IEmployee.Management';

@Component({
    templateUrl: './employee.component.html',
    providers: [MessageService],
})
export class EmployeeComponent implements OnInit {
    employees: IEmployee[] = [];
    employee: IEmployee = {};
    cols: any[] = [];

    constructor(
        private messageService: MessageService,
        private employeeService: EmployeeService
    ) {}

    ngOnInit() {
        this.employeeService
            .getEmployees()
            .subscribe((data) => (this.employees = data));

        this.cols = [
            { field: 'name', header: 'Name', type: 'text' },
            { field: 'position', header: 'position', type: 'text' },
        ];
    }

    handleSaveRow(data: any) {
        const payload = {
            ...data?.rowData,
        };

        if (data.rowData?._id) {
            this.employeeService
                .updateEmployee(payload?._id, payload)
                .subscribe();
        } else {
            this.employeeService.createEmployee(payload).subscribe();
        }
    }

    handleDeleteRow(rowData: any) {
        this.employeeService.deleteEmployee(rowData?._id).subscribe();

        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Employee Deleted',
            life: 3000,
        });
    }
}
