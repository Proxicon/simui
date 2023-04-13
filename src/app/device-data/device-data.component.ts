import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../services/devices.service';

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.component.html',
  styleUrls: ['./device-data.component.scss']
})
export class DeviceDataComponent implements OnInit {
  deviceData: any[] = [];

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
    this.devicesService.getDeviceData().subscribe(
      (data) => {
        this.deviceData = data;
      },
      (error) => {
        console.error('Error fetching device data:', error);
      }
    );
  }
}
