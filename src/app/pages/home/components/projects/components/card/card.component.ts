import { Project } from './../../../../../../shared/models/project.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() project: Project;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProject(id: string){
    this.router.navigateByUrl(id);
  }

}
