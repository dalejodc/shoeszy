import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getShoes } from './../state';
import * as ShoesActions from '../state/shoes.actions';
import { Shoe } from '../shoe';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent implements OnInit {

  shoes$: Observable<Shoe[]>;

  constructor(private store: Store) { }

  shoes: any;

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes() {
    this.store.dispatch(ShoesActions.loadShoes());
    this.shoes$ = this.store.select(getShoes);
  }

  setCurrentShoe(shoe: Shoe) {
    this.store.dispatch(ShoesActions.setCurrentShoe({ shoe }));
  }

  addShoeToCart(shoe) {
    this.store.dispatch(ShoesActions.addShoeToCart({ shoe }));
  }
}
