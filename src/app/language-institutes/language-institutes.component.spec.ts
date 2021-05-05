import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageInstitutesComponent } from './language-institutes.component';

describe('LanguageInstitutesComponent', () => {
  let component: LanguageInstitutesComponent;
  let fixture: ComponentFixture<LanguageInstitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageInstitutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
