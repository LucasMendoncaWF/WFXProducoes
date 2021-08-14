import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isDark = false;
  constructor(
    private darkmodeService: DarkmodeService,
  ) { }

  ngOnInit() {
    this.isDark = sessionStorage.getItem('darkmode') === 'dark';

    this.darkmodeService.darkMode$.subscribe(isDark => {
      this.isDark = isDark;
    });
  }

}
