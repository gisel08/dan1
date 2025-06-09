import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TredingPageComponent } from './treding-page.component';

describe('TredingPageComponent', () => {
  let component: TredingPageComponent;
  let fixture: ComponentFixture<TredingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TredingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TredingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
