import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionSobreMiComponent } from './seccion-sobre-mi.component';

describe('SeccionSobreMiComponent', () => {
  let component: SeccionSobreMiComponent;
  let fixture: ComponentFixture<SeccionSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionSobreMiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
