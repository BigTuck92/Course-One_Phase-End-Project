import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsManagementComponent } from './meetings-management.component';

describe('MeetingsManagementComponent', () => {
  let component: MeetingsManagementComponent;
  let fixture: ComponentFixture<MeetingsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingsManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
