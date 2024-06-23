import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentsFormComponent } from './upload-documents-form.component';

describe('UploadDocumentsFormComponent', () => {
  let component: UploadDocumentsFormComponent;
  let fixture: ComponentFixture<UploadDocumentsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadDocumentsFormComponent]
    });
    fixture = TestBed.createComponent(UploadDocumentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
