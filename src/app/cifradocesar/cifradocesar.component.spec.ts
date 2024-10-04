import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradoCesarComponent } from './cifradocesar.component';

describe('CifradocesarComponent', () => {
  let component: CifradoCesarComponent;
  let fixture: ComponentFixture<CifradoCesarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CifradoCesarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CifradoCesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
