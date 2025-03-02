import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavebuttonComponent } from './wavebutton.component';

describe('WavebuttonComponent', () => {
  let component: WavebuttonComponent;
  let fixture: ComponentFixture<WavebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WavebuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WavebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
