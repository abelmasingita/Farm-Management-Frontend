import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { UserService } from 'src/app/demo/service/user.service';
import { IRole } from 'src/app/demo/utils/IUser.Management';

@Component({
    templateUrl: './role.component.html',
    providers: [MessageService],
})
export class RoleComponent implements OnInit {
    roles: IRole[] = [];

    role: IRole = {};

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private UserService: UserService) {}

    ngOnInit() {
        this.UserService.getRoles().subscribe((data) => (this.roles = data));
        this.cols = [{ field: 'name', header: 'Role' }];
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
