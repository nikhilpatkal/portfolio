import { min } from './../../../../node_modules/@types/three/src/Three.TSL.d';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Section2 } from "../section2/section2";
import { Section1 } from '../section1/section1';
// @ts-ignore
//import FOG from 'vanta/dist/vanta.fog.min';
// import NET from 'vanta/dist/vanta.net.min';
declare var VANTA: any;
@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.html',
  styleUrl: './parent-comp.scss',
  imports: [Section1, Section2]
})
export class ParentComp {
activeSection = 'about';

 @ViewChild('Section2') section2!: Section2;

  scrollToSection(section: string) {
    this.section2.scrollTo(section);
  }
  @ViewChild('vantaRef', { static: true }) vantaRef!: ElementRef;
  vantaEffect: any;

  ngAfterViewInit() {
  //  this.vantaEffect = FOG({
  //     el: this.vantaRef.nativeElement,
  //     THREE: THREE,
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200,
  //     minWidth: 200
  //   });
  //  this.vantaEffect = NET({
  //     el: this.vantaRef.nativeElement,
  //     THREE: THREE,

  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,

  //     minHeight: 200,
  //     minWidth: 200,

  //     scale: 1,
  //     scaleMobile: 1,
      
  //      color: '0x000000',          // mesh lines
  //     backgroundColor: '#4d356b', // deep purple background
  //     points: 8,
  //     maxDistance: 22,
  //     spacing: 20
  //   });
    
  }

  ngOnDestroy() {
    // if (this.vantaEffect) {
    //   this.vantaEffect.destroy();
    // }
  }
 
}
