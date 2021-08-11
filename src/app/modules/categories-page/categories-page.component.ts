import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { projects } from '../projects';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  @ViewChild('categories') el: ElementRef;
  showCategories = true;
  loading = true;
  projects = [];
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.loading = true;
      this.el.nativeElement.scrollTo(0, 0);
      this.projects = projects.filter(project => project.category.toLowerCase() ===  params.id.toLowerCase());
      this.loading = false;
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
