import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { projects } from '../projects';

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

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const currentProject = projects.filter(project => project.projectName.toLowerCase() ===  params.id.toLowerCase());
      this.project = currentProject && currentProject.length ? currentProject[0] : [];
      this.project;
      this.el.nativeElement.scrollTo(0, 0);
      this.loading = false;
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  videoUrl(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }
}
