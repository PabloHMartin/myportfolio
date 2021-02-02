import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Brand } from './models/brands.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("cform", { static: false }) cform;
  @ViewChild("projects", { static: false }) projects;

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
    this.aboutText = `I've always wanted to work by doing something I like. With Software development I have succeeded.
    <br /><br /> I like to create products that I believe in and share the workspace with people who want to improve themselves every day.
    <br /><br /> As a developer, I like to dive into the technologies I use and ,at the same time, try to learn new techniques and framkeworks. I think teamwork is necessary, so the quality of the software must be the best. Words like SOLID, UnitTests or Clean Code are not unknown to me.`;
  }

  scroll(el: string) {
    this[el].nativeElement.scrollIntoView({ behavior: "smooth" });
  }


}
