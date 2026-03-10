import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Scroll } from '../../services/scroll';

@Component({
  selector: 'app-section1',
  imports: [],
  templateUrl: './section1.html',
  styleUrl: './section1.scss',
})
export class Section1 {
scrollService=inject(Scroll);
activeSection = 'about';
@Output() navigate = new EventEmitter<string>();
setActive(section: string) {
  this.activeSection = section;
  // this.scrollService.scrollTo(section);
  this.navigate.emit(section);
}

}
