import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollolocoComponent } from './polloloco.component';

describe('PollolocoComponent', () => {
  let component: PollolocoComponent;
  let fixture: ComponentFixture<PollolocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollolocoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollolocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
