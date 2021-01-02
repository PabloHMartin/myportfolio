import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() isHandset: boolean;
  skillsCirclesColor: string;

  constructor() { }

  ngOnInit(): void {
    this.skillsCirclesColor = "white";
  }

}
