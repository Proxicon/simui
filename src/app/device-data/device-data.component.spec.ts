import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDataComponent } from './device-data.component';

describe('DeviceDataComponent', () => {
  let component: DeviceDataComponent;
  let fixture: ComponentFixture<DeviceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
