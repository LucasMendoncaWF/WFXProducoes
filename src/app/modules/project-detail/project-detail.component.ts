import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projectDetails } from '../projectDetails';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project;
  loading = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const currentProject = projectDetails.filter(project => project.title.toLowerCase() ===  params.id.toLowerCase());
      this.project = currentProject && currentProject.length ? currentProject[0] : [];
      this.loading = false;
    }).unsubscribe();
  }
}
