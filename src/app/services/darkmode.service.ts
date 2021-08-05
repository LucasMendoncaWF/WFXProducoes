import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  darkMode$: Subject<boolean> = new Subject();

  constructor() {
  }
}
