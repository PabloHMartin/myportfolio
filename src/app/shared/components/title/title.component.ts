import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() isHandset: boolean;
  @Input() text: string;
  @Input() color: string;
  @Input() circlesColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
