import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should initialize mobileOverlay to false', () => {
    expect(component.mobileOverlayNavActive).toBe(false);
  });

  it('Should change mobileOberlay to true when open menu and to false when close, only on handset', () => {
    component.isHandset = true;
    fixture.detectChanges();

    const hamburgerButton: HTMLElement = fixture.debugElement
    .query(By.css('.navbar__drawer')).nativeElement;
    hamburgerButton.click();
    fixture.detectChanges();
    expect(component.mobileOverlayNavActive).toBe(true);

    const closeOverlayButton: HTMLElement = fixture.debugElement
    .query(By.css('.mobile-overlay-nav__close')).nativeElement;
    closeOverlayButton.click();
    fixture.detectChanges();
    expect(component.mobileOverlayNavActive).toBe(false);
  });


});
