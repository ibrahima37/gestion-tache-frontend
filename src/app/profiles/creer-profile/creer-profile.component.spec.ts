import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerProfileComponent } from './creer-profile.component';

describe('CreerProfileComponent', () => {
  let component: CreerProfileComponent;
  let fixture: ComponentFixture<CreerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
