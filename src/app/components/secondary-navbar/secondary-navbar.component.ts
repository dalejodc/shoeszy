import { Router } from '@angular/router';
import { Shoe } from './../../shoes/shoe';
import { Observable } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ShoesActions from '../../shoes/state/shoes.actions';
import { getCurrentCart } from './../../shoes/state';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent implements OnInit {

  public innerWidth: any;

  constructor(private store: Store, private router: Router) { }

  @ViewChild('expandedNavbarRight') el: ElementRef;

  shoesCart$: Observable<Shoe[]>;

  ngOnInit(): void {
    this.shoesCart$ = this.store.select(getCurrentCart);
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

  closeNav() {
    if (this.innerWidth <= 576) {
      this.el.nativeElement.style.height = '0';
    } else {
      this.el.nativeElement.style.width = '0';
    }
  }

  deleteShoeFromCart(shoe) {
    this.store.dispatch(ShoesActions.removeShoeFromCart({ shoeId: shoe.id }))
  }

  goToHome(){
    this.closeNav();
    this.router.navigateByUrl('');
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
