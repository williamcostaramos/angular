import { TestBed } from '@angular/core/testing';

import { ContatosDatabaseService } from './contatos-database.service';

describe('ContatosDatabaseService', () => {
  let service: ContatosDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatosDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
