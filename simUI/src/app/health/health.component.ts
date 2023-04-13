import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../services/devices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  healthData: any[] = [];

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
    this.devicesService.getHealthData().subscribe(
      (data) => {
        this.healthData = data;
      },
      (error) => {
        console.error('Error fetching health data:', error);
      }
    );
  }
}
