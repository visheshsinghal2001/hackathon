import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeDtComponent } from './take-dt.component';

describe('TakeDtComponent', () => {
  let component: TakeDtComponent;
  let fixture: ComponentFixture<TakeDtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeDtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
