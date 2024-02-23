import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropmanagementComponent } from './cropmanagement.component';
import { CropmanagementRoutingModule } from './cropmanagement-routing.module';

@NgModule({
    imports: [CommonModule, CropmanagementRoutingModule],
    declarations: [CropmanagementComponent],
})
export class CropManagementListModule {}
