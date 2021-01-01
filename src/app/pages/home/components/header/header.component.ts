import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isHandset: boolean;
  titleText: string;
  headerCirclesColor: string;

  constructor() { }

  ngOnInit(): void {
    this.titleText = "Construyamos juntos el futuro digital";
    this.headerCirclesColor = "grey";
  }

}
