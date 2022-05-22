import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFavsComponent } from './dashboard-favs.component';

describe('DashboardFavsComponent', () => {
  let component: DashboardFavsComponent;
  let fixture: ComponentFixture<DashboardFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFavsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
