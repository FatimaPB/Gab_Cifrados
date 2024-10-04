import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blake3Component } from './blake3.component';


describe('Blake3Component', () => {
  let component: Blake3Component;
  let fixture: ComponentFixture<Blake3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blake3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blake3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
