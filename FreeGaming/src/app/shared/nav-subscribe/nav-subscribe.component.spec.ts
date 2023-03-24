import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubscribeComponent } from './nav-subscribe.component';

describe('NavSubscribeComponent', () => {
  let component: NavSubscribeComponent;
  let fixture: ComponentFixture<NavSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
