import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntefaceComponent } from './inteface.component';

describe('IntefaceComponent', () => {
  let component: IntefaceComponent;
  let fixture: ComponentFixture<IntefaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntefaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntefaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
