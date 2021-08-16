import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  @Input() member;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (this.member.link) {
      window.open(this.member.link, '_blank');
    }
  }

}
