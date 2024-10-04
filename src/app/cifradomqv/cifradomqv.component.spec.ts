import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradomqvComponent } from './cifradomqv.component';

describe('CifradomqvComponent', () => {
  let component: CifradomqvComponent;
  let fixture: ComponentFixture<CifradomqvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CifradomqvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CifradomqvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
