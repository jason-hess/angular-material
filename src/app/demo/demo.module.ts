import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedMaterialModule } from '../shared/shared-material.module';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [CommonModule, DemoRoutingModule, SharedMaterialModule, FormsModule]
})
export class DemoModule {}
