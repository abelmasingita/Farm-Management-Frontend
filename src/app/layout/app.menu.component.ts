import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

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
        ];
    }
}
