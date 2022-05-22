import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFormComponent } from './dashboard-form/dashboard-form.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DashboardFavsComponent } from './dashboard-favs/dashboard-favs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DinamycLabelPipe } from './custom/pipe/dinamyc-label.pipe';
import { YearRangeFormatDirective } from './custom/directive/year-range-format.directive';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardFormComponent,
    DashboardTableComponent,
    DashboardFavsComponent,
    DinamycLabelPipe,
    YearRangeFormatDirective,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
