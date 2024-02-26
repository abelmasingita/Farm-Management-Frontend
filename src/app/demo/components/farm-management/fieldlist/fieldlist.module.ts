import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldlistComponent } from './fieldlist.component';
import { FieldListRoutingModule } from './fieldlist-routing.module';

@NgModule({
    imports: [CommonModule, FieldListRoutingModule],
    declarations: [FieldlistComponent],
})
export class FieldListModule {}
