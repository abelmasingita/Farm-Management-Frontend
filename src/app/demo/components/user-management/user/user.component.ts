import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { UserService } from 'src/app/demo/service/user.service';
import { IRole, IUser } from 'src/app/demo/utils/IUser.Management';

@Component({
    templateUrl: './user.component.html',
    providers: [MessageService],
})
export class UserComponent implements OnInit {
    UserDialog: boolean = false;

    deleteUserDialog: boolean = false;

    deleteUsersDialog: boolean = false;

    users: IUser[] = [];
    roles: IRole[] = [];
    user: IUser = {};
    role: IRole = {};
    selectedUsers: IUser[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private userService: UserService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.userService.getUsers().subscribe((data) => (this.users = data));
        this.userService.getRoles().subscribe((data) => (this.roles = data));

        this.cols = [
            { field: 'firstName', header: 'Name' },
            { field: 'username', header: 'Email' },
            { field: 'phoneNumber', header: 'Contact' },
            { field: 'roleId', header: 'Role' },
            { field: 'isActive', header: 'Is Active' },
        ];
    }

    openNew() {
        this.user = {};
        this.submitted = false;
        this.UserDialog = true;
    }

    deleteSelectedUsers() {
        this.deleteUsersDialog = true;
    }

    edituser(user: IUser) {
        this.user = { ...user };
        this.UserDialog = true;
    }

    deleteuser(user: IUser) {
        this.deleteUserDialog = true;
        this.user = { ...user };
    }

    confirmDeleteSelected() {
        this.deleteUsersDialog = false;
        this.users = this.users.filter(
            (val) => !this.selectedUsers.includes(val)
        );
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'users Deleted',
            life: 3000,
        });
        this.selectedUsers = [];
    }

    confirmDelete() {
        this.deleteUserDialog = false;
        this.userService.deleteUser(this.user._id).subscribe();
        this.users = this.users.filter((val) => val._id !== this.user._id);
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'user Deleted',
            life: 3000,
        });
        this.user = {};
    }

    hideDialog() {
        this.UserDialog = false;
        this.submitted = false;
    }

    saveUser() {
        this.submitted = true;
        this.user.roleId = this.role._id;
        if (this.user.username?.trim()) {
            if (this.user._id) {
                // @ts-ignore
                this.userService
                    .updateUser(this.user._id, this.user)
                    .subscribe();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'User Updated',
                    life: 3000,
                });
            } else {
                this.userService.createUser(this.user).subscribe();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'User Created',
                    life: 3000,
                });
            }

            this.users = [...this.users];
            this.UserDialog = false;
            this.user = {};
        }
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
