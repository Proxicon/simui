import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  private devicesUrl = 'https://sim.proxicon.co.za/simdata';
  private deviceLogsUrl = 'https://sim.proxicon.co.za/simlogs';
  private healthUrl = 'https://sim.proxicon.co.za/health';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.token$.getValue();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getDevices(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(this.devicesUrl, { headers });
  }

  getDeviceLogs(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(this.deviceLogsUrl, { headers });
  }

  getHealth(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(this.healthUrl, { headers });
  }
}
