import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SkillsComponent implements OnInit {

  @Input() isHandset: boolean;
  skillsCirclesColor: string;
  text: string;

  skAndExpText: string;
  softSkills: string[];
  techSkills: string[];

  constructor() { }

  ngOnInit(): void {
    this.skAndExpText = `As a software developer you need to be ready for new tasks that sometimes require a tool you are not familiar with.
    <br/><br/>Is on those cases when you realize that there is one tool every developer should have. The will to learn.
    <br/><br/>In my years as a developer I became familiar with some of them. If you want to know more you can visit my <a class="content__link" href='asd'>LinkedIN profile</a>.`;
    this.skillsCirclesColor = "white";
    this.text = "Skills and experience"
    this.softSkills= ['JIRA/Confluence', 'Scrum experience', 'adobe xd', 'Git'];
    this.techSkills = [ 'Typescript', 'ES6', 'Modern Javascript', 'Angular+2', 'Vue', 'RxJs', 'Unit Testing'];
  }

}
