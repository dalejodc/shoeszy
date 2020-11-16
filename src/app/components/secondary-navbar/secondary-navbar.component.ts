import { Shoe } from './../../shoes/shoe';
import { Observable } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { getCurrentCart } from './../../shoes/state';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent implements OnInit {

  constructor(private store: Store) { }

  @ViewChild('expandedNavbarRight') el: ElementRef;

  shoesCart$: Observable<Shoe[]>;

  ngOnInit(): void {
    this.shoesCart$ = this.store.select(getCurrentCart);
  }

  openNav() {
    const navbar = 80;
    const sidebarWidth = navbar + ((window.innerWidth - (navbar * 2)) / 2);
    this.el.nativeElement.style.zIndex = 1;
    this.el.nativeElement.style.visibility = 'visible';
    this.el.nativeElement.style.width = `${sidebarWidth}px`;
  }

  closeNav() {
    this.el.nativeElement.style.width = "0";
  }

}
