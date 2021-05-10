/** Angular imports */
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

/** Project imports */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { InsightCardComponent } from './components/insight-card/insight-card.component';
import { ManagementCardComponent } from './components/management-card/management-card.component';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { StrategieCardComponent } from './components/strategie-card/strategie-card.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomCardComponent,
    WelcomeCardComponent,
    StrategieCardComponent,
    PortfolioCardComponent,
    ManagementCardComponent,
    InsightCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
