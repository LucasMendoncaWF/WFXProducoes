import { Component, Input, OnInit } from '@angular/core';
import { projects } from '../projects';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  @Input() excludeCategory = '';
  @Input() excludeTitle = '';
  @Input() isDetailPage = false;
  @Input() startFromRight = false;
  projects;

  constructor() { }

  ngOnInit() {
    this.projects = projects
    .filter(project => project.isHome && this.checkCategory(project) && this.checkTitle(project));
  }

  checkCategory(project) {
    return project.category.toLowerCase() !== this.excludeCategory.toLowerCase();
  }

  checkTitle(project) {
    return project.projectName.toLowerCase() !== this.excludeTitle.toLowerCase();
  }

}
