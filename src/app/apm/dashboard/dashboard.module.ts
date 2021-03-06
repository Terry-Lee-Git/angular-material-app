import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../@stbui/shared';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
