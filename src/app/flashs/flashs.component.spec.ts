import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashsComponent } from './flashs.component';

describe('FlashsComponent', () => {
  let component: FlashsComponent;
  let fixture: ComponentFixture<FlashsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
