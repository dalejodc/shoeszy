import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ShoesService } from './../shoes.service';
import * as ShoesActions from '../state/shoes.actions';
import { Shoe } from '../shoe';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent implements OnInit {

  constructor(
    private store: Store,
    private shoesService: ShoesService
  ) { }

  shoes: any;

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes() {
    this.shoes = this.shoesService.getShoes();
  }

  setCurrentShoe(shoe: Shoe) {
    this.store.dispatch(ShoesActions.setCurrentShoe({ shoe }));
  }

  addShoeToCart(shoe) {
    this.store.dispatch(ShoesActions.addShoeToCart({ shoe }));
  }
}
