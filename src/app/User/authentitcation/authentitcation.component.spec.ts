import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentitcationComponent } from './authentitcation.component';

describe('AuthentitcationComponent', () => {
  let component: AuthentitcationComponent;
  let fixture: ComponentFixture<AuthentitcationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentitcationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentitcationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
