import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {

  @Input() cols: number;
  @Input() rows: number;
  @Input() circleWidth: number;
  @Input() circleHeight: number;
  @Input() backgroundColor: string;
  @Input() opacity: number;
  @Input() margin: number;

  colsArr: number[];
  rowsArr: number[];

  constructor() { }

  ngOnInit(): void {
    this.colsArr = Array(this.cols).fill(0).map((x,i)=>i);
    this.rowsArr = Array(this.rows).fill(0).map((x,i)=>i);
  }

}
