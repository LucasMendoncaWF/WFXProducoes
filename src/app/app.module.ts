import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ProjectDetailComponent } from './modules/project-detail/project-detail.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { ProjectComponent } from './modules/project/project.component';
import { CategoriesPageComponent } from './modules/categories-page/categories-page.component';
import { SuggestionsComponent } from './modules/suggestions/suggestions.component';
import { AboutComponent } from './modules/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    CategoriesComponent,
    ProjectComponent,
    CategoriesPageComponent,
    SuggestionsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
