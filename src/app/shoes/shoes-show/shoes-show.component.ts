import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { getCurrentShoe, getCurrenShoeSelectedImagePreview, getShoes, getCurrentCart } from './../state';
import * as ShoesActions from '../state/shoes.actions'
import { Shoe } from './../shoe';

@Component({
  selector: 'app-shoes-show',
  templateUrl: './shoes-show.component.html',
  styleUrls: ['./shoes-show.component.scss']
})
export class ShoesShowComponent implements OnInit {

  constructor(private store: Store) { }

  isSelectedShoeInCart: boolean;
  selectedImagePreview$: Observable<string> | string = '';
  shoe$: Observable<Shoe>;
  shoes$: Observable<Shoe[]>;
  shoesCart$: Observable<Shoe[]>;

  ngOnInit(): void {
    this.shoe$ = this.store.select(getCurrentShoe);
    this.shoes$ = this.store.select(getShoes);
    this.shoesCart$ = this.store.select(getCurrentCart);

    this.selectedImagePreview$ = this.store.select(getCurrenShoeSelectedImagePreview);

    // FIXME: refactor this code
    this.store.select(getCurrentCart).subscribe(shoes => {
      this.shoe$.subscribe(shoe => {
        this.isSelectedShoeInCart = shoes.map(x => x.id).includes(shoe?.id)
      })
    });
  }

  setImagePreview(shoe: Shoe) {
    if (shoe && shoe.photos.length > 0 && !this.selectedImagePreview$) {
      this.selectedImagePreview$ = shoe.photos[0];
    }
  }

  selectImage(image) {
    this.store.dispatch(ShoesActions.setCurrentShoePreviewImage({ image }))
  }

  getRandomShoe() {
    this.shoes$.subscribe(shoes => {
      const shoe: Shoe = shoes[Math.floor(Math.random() * shoes.length)];
      this.store.dispatch(ShoesActions.setCurrentShoe({ shoe }))
    })
  }

  addShoeToCart(shoe) {
    this.store.dispatch(ShoesActions.addShoeToCart({ shoe }));
  }

  deleteShoeFromCart(shoe) {
    this.store.dispatch(ShoesActions.removeShoeFromCart({ shoeId: shoe.id }))
  }
}
