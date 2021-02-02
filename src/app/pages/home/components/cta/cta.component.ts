import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  @Input() isHandset: boolean;
  @Output() scroll: EventEmitter<string> = new EventEmitter<string>();
  ctaText: string;

  constructor() { }

  ngOnInit(): void {
    this.ctaText = "¿ Do you want to hire me ?";
  }

  scrollTo(el: string){
    this.scroll.emit(el);
  }

}
