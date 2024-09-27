import { TestBed } from '@angular/core/testing';

import { LoadingJokeEffect } from './loadingjoke.effect';

describe('LoadingJokeEffectService', () => {
  let service: LoadingJokeEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingJokeEffect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
