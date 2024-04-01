import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TaskService } from 'src/app/demo/service/task.service';
import { IEmployee, ITask } from 'src/app/demo/utils/IEmployee.Management';
import { forkJoin, map } from 'rxjs';
import { FieldService } from 'src/app/demo/service/field.service';
import { EmployeeService } from 'src/app/demo/service/employee.service';
import { IField } from 'src/app/demo/utils/IFarm.Management';
@Component({
    templateUrl: './task.component.html',
    providers: [MessageService],
})
export class TaskComponent implements OnInit {
    tasks: ITask[] = [];
    employees: IEmployee[] = [];
    fields: IField[] = [];
    task: ITask = {};
    cols: any[] = [];

    constructor(
        private messageService: MessageService,
        private taskService: TaskService,
        private fieldService: FieldService,
        private employeeService: EmployeeService
    ) {}

    ngOnInit() {
        forkJoin({
            employees: this.employeeService.getEmployees(),
            fields: this.fieldService.getFields(),
            tasks: this.taskService.getTasks(),
        })
            .pipe(
                map(({ tasks, fields, employees }) => {
                    const updatedTasks = tasks.map((task) => {
                        const field = fields.find(
                            (f) => f._id === task?.field_id
                        );
                        const employee = employees.find(
                            (e) => e._id === task?.employee_id
                        );

                        return {
                            ...task,
                            field_id: field ? field?.name : '',
                            employee_id: employee ? employee?.name : '',
                        };
                    });
                    return { updatedTasks, fields, employees };
                })
            )
            .subscribe(({ fields, updatedTasks, employees }) => {
                this.fields = fields;
                this.employees = employees;
                this.tasks = updatedTasks;
            });

        this.cols = [
            { field: 'name', header: 'Name', type: 'text' },
            { field: 'description', header: 'Description', type: 'text' },
            { field: 'status', header: 'Status', type: 'text' },
            { field: 'task_date', header: 'Date', type: 'date' },
            { field: 'field_id', header: 'Field', type: 'select' },
            { field: 'employee_id', header: 'Employee', type: 'select' },
        ];
    }

    handleSaveRow(data: any) {
        const payload = {
            ...data?.rowData,
        };

        if (data.rowData?._id) {
            this.taskService.updateTask(payload?._id, payload).subscribe();
        } else {
            this.taskService.createTask(payload).subscribe();
        }
    }

    handleDeleteRow(rowData: any) {
        this.taskService.deleteTask(rowData?._id).subscribe();

        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Task Deleted',
            life: 3000,
        });
    }
}
