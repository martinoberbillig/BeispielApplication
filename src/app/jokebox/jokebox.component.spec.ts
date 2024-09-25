import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeBoxComponent } from './jokebox.component';

describe('JokeBoxComponent', () => {
  let component: JokeBoxComponent;
  let fixture: ComponentFixture<JokeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JokeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
