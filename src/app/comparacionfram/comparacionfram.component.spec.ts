import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacionframComponent } from './comparacionfram.component';

describe('ComparacionframComponent', () => {
  let component: ComparacionframComponent;
  let fixture: ComponentFixture<ComparacionframComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparacionframComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComparacionframComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
