import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentLinkComponent } from './sent-link.component';

describe('SentLinkComponent', () => {
  let component: SentLinkComponent;
  let fixture: ComponentFixture<SentLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
