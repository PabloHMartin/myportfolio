import { Project } from './../../shared/models/project.model';
import { DbService } from './../../shared/services/db.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy  {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  destroy$: Subject<boolean> = new Subject<boolean>();
  headerCirclesColor: string;
  projectId: string;
  project: Project;

  constructor(private db: DbService,
              private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver) { }


  ngOnInit(): void {
    this.headerCirclesColor = "grey";
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
