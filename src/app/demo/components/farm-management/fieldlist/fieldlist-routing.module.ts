import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FieldlistComponent } from './fieldlist.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: FieldlistComponent }]),
    ],
    exports: [RouterModule],
})
export class FieldListRoutingModule {}
