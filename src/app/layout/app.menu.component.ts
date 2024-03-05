import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Roles } from '../demo/utils/IUser.Management';
import { AuthService } from '../demo/service/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        const userRole = this.authService.getUserRole();
        const menuModel = [
            {
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/demo'],
                        roles: [
                            Roles.ADMINISTRATOR,
                            Roles.MANAGER,
                            Roles.EMPLOYEE,
                        ],
                    },
                ],
            },
            {
                items: [
                    {
                        label: 'Farm Management',
                        icon: 'pi pi-sliders-h',
                        roles: [
                            Roles.ADMINISTRATOR,
                            Roles.MANAGER,
                            Roles.EMPLOYEE,
                        ],
                        items: [
                            {
                                label: 'Farm List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/farm-management/'],
                            },
                            {
                                label: 'Field List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/field-management/'],
                            },
                            {
                                label: 'Crop Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/crop-management/'],
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
                        roles: [
                            Roles.ADMINISTRATOR,
                            Roles.MANAGER,
                            Roles.EMPLOYEE,
                        ],
                        items: [
                            {
                                label: 'Employee',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/employee-management'],
                            },
                            {
                                label: 'Task',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/task-management'],
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
                        roles: [
                            Roles.ADMINISTRATOR,
                            Roles.MANAGER,
                            Roles.EMPLOYEE,
                        ],
                        items: [
                            {
                                label: 'Farm List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/farm-management/'],
                            },
                            {
                                label: 'Field List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/field-management/'],
                            },
                            {
                                label: 'Crop Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/crop-management/'],
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
                        roles: [Roles.ADMINISTRATOR, Roles.MANAGER],
                        items: [
                            {
                                label: 'Farm List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/farm-management/'],
                            },
                            {
                                label: 'Field List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/field-management/'],
                            },
                            {
                                label: 'Crop Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/crop-management/'],
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
                        roles: [Roles.ADMINISTRATOR, Roles.MANAGER],
                        items: [
                            {
                                label: 'Farm List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/farm-management/'],
                            },
                            {
                                label: 'Field List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/field-management/'],
                            },
                            {
                                label: 'Crop Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/crop-management/'],
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
                        roles: [Roles.ADMINISTRATOR, Roles.MANAGER],
                        items: [
                            {
                                label: 'Farm List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/farm-management/'],
                            },
                            {
                                label: 'Field List',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/field-management/'],
                            },
                            {
                                label: 'Crop Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/crop-management/'],
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
                        roles: [Roles.ADMINISTRATOR],
                        items: [
                            {
                                label: 'User Management',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/user-management/'],
                            },
                            {
                                label: 'Roles',
                                icon: 'pi pi-circle',
                                routerLink: ['/demo/role-management/'],
                            },
                        ],
                    },
                ],
            },
            {
                items: [
                    {
                        label: 'Log Out',
                        icon: 'pi pi-sign-out',
                        command: (event) => {
                            this.logout();
                        },
                    },
                ],
            },
        ];

        this.model = this.filterMenuByRole(menuModel, userRole);
    }

    private filterMenuByRole(menu: any[], role: string): any[] {
        return menu.filter((item) => {
            if (item.roles && !item.roles.includes(role)) {
                return false;
            }

            if (item.items) {
                item.items = this.filterMenuByRole(item.items, role);
            }
            return true;
        });
    }

    logout() {
        this.authService.logout();
    }
}
