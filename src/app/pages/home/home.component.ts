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
  }

}
