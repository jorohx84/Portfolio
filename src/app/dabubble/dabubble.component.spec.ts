import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DabubbleComponent } from './dabubble.component';

describe('DabubbleComponent', () => {
  let component: DabubbleComponent;
  let fixture: ComponentFixture<DabubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DabubbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DabubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
