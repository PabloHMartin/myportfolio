import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() isHandset: boolean;
  skillsCirclesColor: string;
  text: string;

  softSkills: string[];
  techSkills: string[];

  constructor() { }

  ngOnInit(): void {
    this.skillsCirclesColor = "white";
    this.text = "Skills and experience"
    this.softSkills= ['JIRA/Confluence', 'Scrum experience', 'adobe xd', 'Git'];
    this.techSkills = [ 'Typescript', 'ES6', 'Modern Javascript', 'Angular+2', 'Vue', 'RxJs', 'Unit Testing'];
  }

}
