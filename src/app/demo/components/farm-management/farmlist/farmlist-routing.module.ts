import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FarmlistComponent } from './farmlist.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: FarmlistComponent }]),
    ],
    exports: [RouterModule],
})
export class FarmListRoutingModule {}
