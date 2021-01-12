import { Project } from './../../shared/models/project.model';
import { DbService } from './../../shared/services/db.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy  {

  destroy$: Subject<boolean> = new Subject<boolean>();

  projectId: string;
  project: Project;

  constructor(private db: DbService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.projectId = this.route.snapshot.params['id'];
    this.getProjectById();
  }

  getProjectById(): void {
      this.db.getProjectById(this.projectId)
      .pipe(
      takeUntil(this.destroy$)
      )
      .subscribe(
        val => this.project = val
      )
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
