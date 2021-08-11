import { Component, OnInit } from '@angular/core';
import { members } from '../members';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  members = members;
  
  constructor() { }

  ngOnInit() {
  }

}
