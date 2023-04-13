import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceDataComponent } from './device-data/device-data.component';
import { DeviceLogsComponent } from './device-logs/device-logs.component';
import { HealthComponent } from './health/health.component';
import { DeviceMapComponent } from './device-map/device-map.component';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideMenuComponent,
    DevicesComponent,
    DeviceDataComponent,
    DeviceLogsComponent,
    HealthComponent,
    DeviceMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
