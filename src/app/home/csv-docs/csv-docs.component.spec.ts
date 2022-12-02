import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvDocsComponent } from './csv-docs.component';

describe('CsvDocsComponent', () => {
  let component: CsvDocsComponent;
  let fixture: ComponentFixture<CsvDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
