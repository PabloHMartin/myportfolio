import { DbService } from './../../../../shared/services/db.service';
import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper/core';
// install Swiper components
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() isHandset: boolean;
  text: string;
  cfromCirclesColor: string;

  constructor(public db: DbService) { }

  ngOnInit(): void {
    this.text = "Projects";
    this.cfromCirclesColor = "grey";
  }

  onSwiper(event: any): void{

  }

  onSlideChange(): void{

  }

}
