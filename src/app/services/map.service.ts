import { Injectable } from '@angular/core';
import { DevicesService } from './devices.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface DeviceLocation {
  deviceId: string;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private devicesService: DevicesService) {}

  getDeviceLocations(): Observable<DeviceLocation[]> {
    return this.devicesService.getDevices().pipe(
      map((devices) =>
        devices.map((device: any) => ({
          deviceId: device.deviceId,
          latitude: device.latitude,
          longitude: device.longitude,
        }))
      )
    );
  }
}
