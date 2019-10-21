import { Component, OnInit, HostBinding  } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class NavComponent implements OnInit {

  appTitle: string = 'Lainatussifa Dalimunthe';
  visibleNav: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showHideNav(){

    this.visibleNav = !this.visibleNav;

  }

}
