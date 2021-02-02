import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isHandset: boolean;
  @Output() scroll: EventEmitter<string> = new EventEmitter<string>();
  titleText: string;
  subtitle: string;
  buttonText: string;
  headerCirclesColor: string;

  constructor() { }

  ngOnInit(): void {
    this.titleText = "Let's build the digital future together";
    this.subtitle = "The team player front-end developer you are looking for";
    this.buttonText = "Let's talk";
    this.headerCirclesColor = "grey";
  }

  scrollTo(el: string) {
    console.log(el);
      this.scroll.emit(el);
  }

}
