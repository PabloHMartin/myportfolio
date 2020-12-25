import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() isHandset: boolean;

  mobileOverlayNavActive: boolean;

  constructor() { }

  ngOnInit(): void {
    this.mobileOverlayNavActive = false;
  }

  toggleMobileNavOverlay(): void{
    this.mobileOverlayNavActive = !this.mobileOverlayNavActive;
  }

}
