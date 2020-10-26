import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesShellComponent } from './shoes-shell.component';

describe('ShoesShellComponent', () => {
  let component: ShoesShellComponent;
  let fixture: ComponentFixture<ShoesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
