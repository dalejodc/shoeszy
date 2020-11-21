import { Store } from '@ngrx/store';
import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import * as ShoesActions from '../../shoes/state/shoes.actions';

@Component({
  selector: 'app-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['./primary-navbar.component.scss'],
})
export class PrimaryNavbarComponent implements OnInit {

  public innerWidth: any;

  constructor(
    private router: Router,
    private store: Store
  ) { }

  @ViewChild('expandedNavbar') el: ElementRef;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  openNav() {
    const navbar = 80;

    if (this.innerWidth <= 576) {
      this.el.nativeElement.style.height = '100%';
    } else {
      this.el.nativeElement.style.width = navbar + ((window.innerWidth - (navbar * 2)) / 2) + 'px';
    }

    this.el.nativeElement.style.zIndex = 1;
    this.el.nativeElement.style.visibility = 'visible';
  }

  clearCurrentProduct(){
    this.goTo('');
    this.store.dispatch(ShoesActions.clearCurrentShoe());
  }

  closeNav() {
    if (this.innerWidth <= 576) {
      this.el.nativeElement.style.height = '0';
    } else {
      this.el.nativeElement.style.width = '0';
    }
  }

  goTo(url) {
    this.router.navigateByUrl(url);
    this.closeNav();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
