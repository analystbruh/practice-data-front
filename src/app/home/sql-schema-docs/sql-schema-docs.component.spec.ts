import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlSchemaDocsComponent } from './sql-schema-docs.component';

describe('SqlSchemaDocsComponent', () => {
  let component: SqlSchemaDocsComponent;
  let fixture: ComponentFixture<SqlSchemaDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlSchemaDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlSchemaDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
