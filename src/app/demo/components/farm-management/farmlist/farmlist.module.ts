import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmListRoutingModule } from './farmlist-routing.module';
import { FarmlistComponent } from './farmlist.component';

@NgModule({
    imports: [CommonModule, FarmListRoutingModule],
    declarations: [FarmlistComponent],
})
export class FarmListModule {}
