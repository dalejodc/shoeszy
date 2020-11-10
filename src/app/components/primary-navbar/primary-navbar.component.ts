import { Store } from '@ngrx/store';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as ShoesActions from '../../shoes/state/shoes.actions';

@Component({
  selector: 'app-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['./primary-navbar.component.scss']
})
export class PrimaryNavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store
  ) { }

  @ViewChild('expandedNavbar') el: ElementRef;

  ngOnInit(): void {
  }

  openNav() {
    const navbar = 80;
    const sidebarWidth = navbar + ((window.innerWidth - (navbar * 2)) / 2);
    this.el.nativeElement.style.zIndex = 1;
    this.el.nativeElement.style.visibility = 'visible';
    this.el.nativeElement.style.width = `${sidebarWidth}px`;
  }

  clearCurrentProduct(){
    this.store.dispatch(ShoesActions.clearCurrentShoe());
  }

  closeNav() {
    this.el.nativeElement.style.width = "0";
  }

  goTo(url) {
    this.router.navigateByUrl(url);
    this.closeNav();
  }
}
