import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../services/devices.service';

@Component({
  selector: 'app-device-logs',
  templateUrl: './device-logs.component.html',
  styleUrls: ['./device-logs.component.scss']
})
export class DeviceLogsComponent implements OnInit {
  deviceLogs: any[] = [];

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
    this.devicesService.getDeviceLogs().subscribe(
      (data) => {
        this.deviceLogs = data;
      },
      (error) => {
        console.error('Error fetching device logs:', error);
      }
    );
  }
}
