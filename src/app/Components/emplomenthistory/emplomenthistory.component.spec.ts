import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplomenthistoryComponent } from './emplomenthistory.component';

describe('EmplomenthistoryComponent', () => {
  let component: EmplomenthistoryComponent;
  let fixture: ComponentFixture<EmplomenthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplomenthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplomenthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
