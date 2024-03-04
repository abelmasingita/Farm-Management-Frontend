import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: RoleComponent }])],
    exports: [RouterModule],
})
export class RoleRoutingModule {}
