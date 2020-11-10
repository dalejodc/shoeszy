import { getCurrentCart } from './../../shoes/state/shoes.reducer';
import { Store } from '@ngrx/store';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent implements OnInit {

  constructor(private store: Store) { }

  @ViewChild('expandedNavbarRight') el: ElementRef;

  cart: number = 0;

  ngOnInit(): void {
    this.store.select(getCurrentCart).subscribe(
      cart => {
        this.cart = cart.length;
      }
    )
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
