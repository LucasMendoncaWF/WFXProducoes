import { Component, OnInit } from '@angular/core';
import { projects } from '../projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showCategories = true;
  projects = projects.filter(project => project.isHome);

  constructor() { }

  ngOnInit() {
  }

}
