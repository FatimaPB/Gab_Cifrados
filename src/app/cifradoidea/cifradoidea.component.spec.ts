import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradoideaComponent } from './cifradoidea.component';

describe('CifradoideaComponent', () => {
  let component: CifradoideaComponent;
  let fixture: ComponentFixture<CifradoideaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CifradoideaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CifradoideaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
