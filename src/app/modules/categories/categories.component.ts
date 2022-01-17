import { Component, OnInit } from '@angular/core';
import { projects } from '../projects';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories = [];

  constructor() { }

  ngOnInit() {
    this.categories = [];
    projects.map(project => {
      const currentCategory = this.categories.filter(category => category.name === project.category);
      if(currentCategory && !currentCategory.length) {
        this.categories.push({ name: project.category, link: '/categoria/' + project.category.toLowerCase() });
      }
    });
  }

}
