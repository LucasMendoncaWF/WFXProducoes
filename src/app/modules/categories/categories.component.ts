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
      if(!this.categories.includes(project.category)){
        this.categories.push({ name: project.category, link: '/categoria/' + project.category.toLowerCase() })
      };
    })
  }

}
