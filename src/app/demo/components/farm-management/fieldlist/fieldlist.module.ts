import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldListRoutingModule } from './fieldlist-routing.module';
import { FieldlistComponent } from './fieldlist.component';

@NgModule({
    imports: [CommonModule, FieldListRoutingModule],
    declarations: [FieldlistComponent],
})
export class FieldListModule {}
