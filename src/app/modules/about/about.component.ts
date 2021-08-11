import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  members = [
    { name: 'Lucas Mendonça', photo: 'pessoax.jpg', position: 'CEO, Diretor e Roteirista'},
    { name: 'Guilherme Dunguel', photo: 'pessoax.jpg', position: 'Designer e Analista de Marketing'},
    { name: 'Caio Balbino', photo: 'pessoax.jpg', position: 'Desenhista'},
    { name: 'Lucas Freire', photo: 'pessoax.jpg', position: 'Designer e Documentador'},
    { name: 'Daniel Galuppo', photo: 'pessoax.jpg', position: 'Editor de Vídeo e Motion Designer'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
