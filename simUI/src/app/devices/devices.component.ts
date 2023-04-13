import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
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
