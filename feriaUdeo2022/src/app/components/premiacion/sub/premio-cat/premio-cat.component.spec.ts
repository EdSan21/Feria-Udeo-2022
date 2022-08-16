import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremioCatComponent } from './premio-cat.component';

describe('PremioCatComponent', () => {
  let component: PremioCatComponent;
  let fixture: ComponentFixture<PremioCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremioCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremioCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
