import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCifradoComponent } from './header-cifrado.component';

describe('HeaderCifradoComponent', () => {
  let component: HeaderCifradoComponent;
  let fixture: ComponentFixture<HeaderCifradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCifradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderCifradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
