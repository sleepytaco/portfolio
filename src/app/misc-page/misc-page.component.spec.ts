import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscPageComponent } from './misc-page.component';

describe('MiscPageComponent', () => {
  let component: MiscPageComponent;
  let fixture: ComponentFixture<MiscPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscPageComponent]
    });
    fixture = TestBed.createComponent(MiscPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
