import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CropmanagementComponent } from './cropmanagement.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: CropmanagementComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class CropmanagementRoutingModule {}
