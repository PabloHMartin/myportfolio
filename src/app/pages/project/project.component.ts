import { DbService } from './../../shared/services/db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private db: DbService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( v => console.log(v.id))

    this.db.getProjectById('quality-ecommerce-for-vodafone').subscribe(val => console.log(val));
  }

}
