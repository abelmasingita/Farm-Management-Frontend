import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from './demo/guards/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: 'demo',
                    component: AppLayoutComponent,
                    canActivate: [AuthGuard],
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './demo/components/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        },
                        {
                            path: 'farm-management',
                            loadChildren: () =>
                                import(
                                    './demo/components/farm-management/farmlist/farmlist.module'
                                ).then((m) => m.FarmListModule),
                        },
                        {
                            path: 'field-management',
                            loadChildren: () =>
                                import(
                                    './demo/components/farm-management/fieldlist/fieldlist.module'
                                ).then((m) => m.FieldListModule),
                        },
                        {
                            path: 'crop-management',
                            loadChildren: () =>
                                import(
                                    './demo/components/farm-management/cropmanagement/cropmanagement.module'
                                ).then((m) => m.CropManagementListModule),
                        },
                        {
                            path: 'employee-management',
                            loadChildren: () =>
                                import(
                                    './demo/components/employee-management/employee/employee.module'
                                ).then((m) => m.EmployeeModule),
                        },
                        {
                            path: 'task-management',
                            loadChildren: () =>
                                import(
                                    './demo/components/employee-management/task/task.module'
                                ).then((m) => m.TaskModule),
                        },
                    ],
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./demo/components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },
                {
                    path: '',
                    loadChildren: () =>
                        import('./demo/components/landing/landing.module').then(
                            (m) => m.LandingModule
                        ),
                },
                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
