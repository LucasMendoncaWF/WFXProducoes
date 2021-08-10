import { Component, HostBinding, OnInit } from '@angular/core';
import { DarkmodeService } from './services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wfxproducoes';
  @HostBinding('class.dark') isDark = true;

  constructor(
    private darkmodeService: DarkmodeService,
  ) {}

  ngOnInit() {
    this.darkmodeService.darkMode$.subscribe(isDark => {
      this.isDark = isDark;
    });
  }
}
