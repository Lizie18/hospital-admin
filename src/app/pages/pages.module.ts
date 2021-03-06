import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsComponent } from './charts/charts.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Ng Charts
import { ChartsModule } from 'ng2-charts';

// External Components
import { IncreaserComponent } from '../components/increaser/increaser.component';
import { DoughnutChartComponent } from '../components/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    ChartsComponent,
    PagesComponent,
    IncreaserComponent,
    DoughnutChartComponent,
    AccountSettingsComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule
  ],
})
export class PagesModule {}
