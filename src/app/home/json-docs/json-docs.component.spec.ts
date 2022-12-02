import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDocsComponent } from './json-docs.component';

describe('JsonDocsComponent', () => {
  let component: JsonDocsComponent;
  let fixture: ComponentFixture<JsonDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
