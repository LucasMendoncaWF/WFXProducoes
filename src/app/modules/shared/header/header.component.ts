import { Component, HostBinding, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  darkmode;

  constructor(
    private darkmodeService: DarkmodeService
  ) { }

  ngOnInit() {
    this.darkmode = sessionStorage.getItem('darkmode') === 'dark';
    this.darkmodeService.darkMode$.next(this.darkmode);
    this.darkmodeService.darkMode$.subscribe(isDark => {
      this.darkmode = isDark;
    });
  }

  toggleDarkMode() {
    sessionStorage.setItem('darkmode', this.darkmode ? 'light' : 'dark');
    this.darkmodeService.darkMode$.next(!this.darkmode);
  }

}
