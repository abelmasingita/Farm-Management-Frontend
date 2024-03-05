import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Roles } from '../demo/utils/IUser.Management';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/demo'],
                        roles: [Roles.ADMINISTRATOR],
                    },
                ],
            },
            {
                items: [
                    {
                        label: 'Farm Management',
                        icon: 'pi pi-sliders-h',
                        items: [
                            {
                                label: 'Farm List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/farm-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Field List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/field-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Crop Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/crop-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                        ],
                    },
                ],
            },
            {
                items: [
                    {
                        label: 'Employee Management',
                        icon: 'pi pi-user-edit',
                        items: [
                            {
                                label: 'Employee',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/employee-management'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Task',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/task-management'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                        ],
                    },
                ],
            },
            {
                items: [
                    {
                        label: 'Equipment Management',
                        icon: 'pi pi-book',
                        items: [
                            {
                                label: 'Farm List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/farm-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Field List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/field-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Crop Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/crop-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                        ],
                    },
                ],
            },
            {
                items: [
                    {
                        label: 'Expense Tracking',
                        icon: 'pi pi-pencil',
                        items: [
                            {
                                label: 'Farm List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/farm-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Field List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/field-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Crop Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/crop-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                        ],
                    },
                ],
            },
            {
                items: [
                    {
                        label: 'Reporting',
                        icon: 'pi pi-chart-bar',
                        items: [
                            {
                                label: 'Farm List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/farm-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Field List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/field-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Crop Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/crop-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                        ],
                    },
                ],
            },
            {
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-briefcase',
                        items: [
                            {
                                label: 'Farm List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/farm-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Field List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/field-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Crop Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/crop-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                        ],
                    },
                ],
            },
            {
                items: [
                    {
                        label: 'Administration',
                        icon: 'pi pi-users',
                        items: [
                            {
                                label: 'User Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/user-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                            {
                                label: 'Roles',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/role-management/'],
                                roles: [Roles.ADMINISTRATOR],
                            },
                        ],
                    },
                ],
            },
        ];
    }
}
