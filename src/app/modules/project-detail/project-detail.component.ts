import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { projectDetails } from '../projectDetails';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  @ViewChild('detailProject') el: ElementRef;
  project;
  loading = true;
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const currentProject = projectDetails.filter(project => project.title.toLowerCase() ===  params.id.toLowerCase());
      this.project = currentProject && currentProject.length ? currentProject[0] : [];
      this.el.nativeElement.scrollTo(0, 0);
      console.log(this.el.nativeElement)
      this.loading = false;
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
