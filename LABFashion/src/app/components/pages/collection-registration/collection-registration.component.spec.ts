import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionRegistrationComponent } from './collection-registration.component';

describe('CollectionRegistrationComponent', () => {
  let component: CollectionRegistrationComponent;
  let fixture: ComponentFixture<CollectionRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
