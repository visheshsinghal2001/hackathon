import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeOutputComponent } from './make-output.component';

describe('MakeOutputComponent', () => {
  let component: MakeOutputComponent;
  let fixture: ComponentFixture<MakeOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
