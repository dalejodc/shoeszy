import { getCurrentCart } from './../../shoes/state/shoes.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent implements OnInit {

  constructor(private store: Store) { }

  cart: number = 0;

  ngOnInit(): void {
    this.store.select(getCurrentCart).subscribe(
      cart => {
        this.cart = cart.length;
      }
    )
  }

}
