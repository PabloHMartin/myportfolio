import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Brand } from './models/brands.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    aboutText: string;
    brands: Brand[];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.brands = [
      {
        imgUrl: '../../../assets/img/Telxius_logo.png',
        alt: 'telxius'
      },
      {
        imgUrl: '../../../assets/img/vodafonelogo.png',
        alt: 'vodafone'
      },      {
        imgUrl: '../../../assets/img/Indra-Sistemas-Logo.png',
        alt: 'Indra'
      },
      {
        imgUrl: '../../../assets/img/orange_logo.png',
        alt: 'vodafone'
      },
      {
        imgUrl: '../../../assets/img/sia.jpg',
        alt: 'vodafone'
      }
    ]
    this.aboutText = "Loremipsum tocho Lorem ipsum tocho \n pero mucho Lorem \n ipsum tocho Lorem ipsum tocho Lorem ipsum, \n tocho Lorem ipsum tocho , \n tocho Lorem ipsum tocho , \n tocho Lorem ipsum tocho";
  }

}
