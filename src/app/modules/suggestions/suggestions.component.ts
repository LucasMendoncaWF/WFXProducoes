import { Component, Input, OnChanges } from '@angular/core';
import { projects } from '../projects';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnChanges {
  @Input() excludeCategory = '';
  @Input() excludeTitle = '';
  @Input() isDetailPage = false;
  @Input() startFromRight = false;
  @Input() customFilter;
  projects;

  constructor() { }

  ngOnChanges() {
    this.projects = projects
    .filter(project =>  this.checkCustomFilter(project) && this.checkCategory(project) && this.checkTitle(project));
  }

  checkCustomFilter(project) {
    return !this.customFilter || project[this.customFilter];
  }

  checkCategory(project) {
    return !this.excludeCategory || project.category.toLowerCase() !== this.excludeCategory.toLowerCase();
  }

  checkTitle(project) {
    return !this.excludeTitle || project.projectName.toLowerCase() !== this.excludeTitle.toLowerCase();
  }

}
