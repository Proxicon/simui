import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../services/devices.service';

@Component({
  selector: 'app-device-map',
  templateUrl: './device-map.component.html',
  styleUrls: ['./device-map.component.scss']
})
export class DeviceMapComponent implements OnInit {
  devices: any[] = [];

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
    this.devicesService.getDevices().subscribe(
      (data) => {
        this.devices = data;
      },
      (error) => {
        console.error('Error fetching devices:', error);
      }
    );
  }
}
