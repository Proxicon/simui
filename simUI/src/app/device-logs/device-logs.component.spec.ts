import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLogsComponent } from './device-logs.component';

describe('DeviceLogsComponent', () => {
  let component: DeviceLogsComponent;
  let fixture: ComponentFixture<DeviceLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
