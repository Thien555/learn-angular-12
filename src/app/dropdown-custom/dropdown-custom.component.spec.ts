import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCustomComponent } from './dropdown-custom.component';

describe('DropdownCustomComponent', () => {
  let component: DropdownCustomComponent;
  let fixture: ComponentFixture<DropdownCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownCustomComponent]
    });
    fixture = TestBed.createComponent(DropdownCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
