import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlTableDocsComponent } from './sql-table-docs.component';

describe('SqlTableDocsComponent', () => {
  let component: SqlTableDocsComponent;
  let fixture: ComponentFixture<SqlTableDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlTableDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlTableDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
