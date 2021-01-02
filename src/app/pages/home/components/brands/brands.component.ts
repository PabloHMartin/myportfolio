import { Brand } from './../../models/brands.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  @Input() brands: Brand[];
  @Input() isHandset: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
