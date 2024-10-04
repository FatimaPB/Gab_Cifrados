import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradoescitalaComponent } from './cifradoescitala.component';

describe('CifradoescitalaComponent', () => {
  let component: CifradoescitalaComponent;
  let fixture: ComponentFixture<CifradoescitalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CifradoescitalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CifradoescitalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
