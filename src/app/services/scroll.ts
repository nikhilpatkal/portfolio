import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Scroll {
  
  private scrollSource = new Subject<string>();
  scroll$ = this.scrollSource.asObservable();

  // scrollTo(section: string) {
  //   this.scrollSource.next(section);
  // }

}
