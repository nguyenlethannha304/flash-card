import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashDetailComponent } from './flash-detail.component';

describe('FlashDetailComponent', () => {
  let component: FlashDetailComponent;
  let fixture: ComponentFixture<FlashDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
