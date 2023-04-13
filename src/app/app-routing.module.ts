import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceDataComponent } from './device-data/device-data.component';
import { DeviceLogsComponent } from './device-logs/device-logs.component';
import { HealthComponent } from './health/health.component';
import { DeviceMapComponent } from './device-map/device-map.component';

const routes: Routes = [
  { path: '', redirectTo: 'devices', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'device-data', component: DeviceDataComponent },
  { path: 'device-logs', component: DeviceLogsComponent },
  { path: 'health', component: HealthComponent },
  { path: 'device-map', component: DeviceMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
