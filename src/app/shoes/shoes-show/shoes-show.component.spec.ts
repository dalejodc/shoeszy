import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesShowComponent } from './shoes-show.component';

describe('ShoesShowComponent', () => {
  let component: ShoesShowComponent;
  let fixture: ComponentFixture<ShoesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
