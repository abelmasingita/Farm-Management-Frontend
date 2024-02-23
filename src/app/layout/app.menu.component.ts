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
                label: 'Farm Management',
                items: [
                    {
                        label: 'Farm List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/demo/farm-management/'],
                    },
                    {
                        label: 'Field List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/demo/field-management/'],
                    },
                    {
                        label: 'Crop Management',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/demo/crop-management/'],
                    },
                ],
            },
            {
                label: 'Employee Management',
                items: [
                    {
                        label: 'Free Blocks',
                        icon: 'pi pi-fw pi-eye',
                        routerLink: ['/demo/blocks'],
                        badge: 'NEW',
                    },
                    {
                        label: 'All Blocks',
                        icon: 'pi pi-fw pi-globe',
                        url: ['https://www.primefaces.org/primeblocks-ng'],
                        target: '_blank',
                    },
                ],
            },
            {
                label: 'Equipment Management',
                items: [
                    {
                        label: 'PrimeIcons',
                        icon: 'pi pi-fw pi-prime',
                        routerLink: ['/demo/utilities/icons'],
                    },
                    {
                        label: 'PrimeFlex',
                        icon: 'pi pi-fw pi-desktop',
                        url: ['https://www.primefaces.org/primeflex/'],
                        target: '_blank',
                    },
                ],
            },
            {
                label: 'Expense Tracking',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound'],
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/demo/pages/empty'],
                    },
                ],
            },
            {
                label: 'Reporting',
                items: [
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {
                                        label: 'Submenu 2.1.1',
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                    {
                                        label: 'Submenu 2.1.2',
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                ],
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {
                                        label: 'Submenu 2.2.1',
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Settings',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/demo/documentation'],
                    },
                ],
            },
            {
                label: 'System Administration',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/demo/documentation'],
                    },
                ],
            },
        ];
    }
}
