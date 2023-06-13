import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './shared/card/header/header.component';
import { ContentComponent } from './shared/card/content/content.component';
import { FooterComponent } from './shared/card/footer/footer.component';
import { StationEnergyComponent } from './components/station-energy/station-energy.component';
import { HttpClientModule } from '@angular/common/http';
import { TotalEnergyComponent } from './shared/total-energy/total-energy.component';
import { ChargersComponent } from './components/chargers/chargers.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    CardComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    StationEnergyComponent,
    TotalEnergyComponent,
    ChargersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
