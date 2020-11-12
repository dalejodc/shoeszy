import { ShoesService } from './../shoes.service';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { getCurrentShoe, getCurrenShoeSelectedImagePreview, getShoes } from './../state';
import * as ShoesActions from '../state/shoes.actions'
import { Shoe } from './../shoe';

@Component({
  selector: 'app-shoes-show',
  templateUrl: './shoes-show.component.html',
  styleUrls: ['./shoes-show.component.scss']
})
export class ShoesShowComponent implements OnInit {

  constructor(
    private store: Store,
    private shoeService: ShoesService
  ) { }

  selectedImagePreview$: Observable<string> | string = '';
  shoe$: Observable<Shoe>;
  shoes$: Observable<Shoe[]>;

  ngOnInit(): void {
    this.shoe$ = this.store.select(getCurrentShoe);
    this.shoes$ = this.store.select(getShoes);
    this.selectedImagePreview$ = this.store.select(getCurrenShoeSelectedImagePreview);
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
    const shoes : Shoe[] = [];

    this.shoes$.subscribe(shoes => {
      const shoe: Shoe = shoes[Math.floor(Math.random() * shoes.length)];
      this.store.dispatch(ShoesActions.setCurrentShoe({ shoe }))
    })
  }

  addShoeToCart(shoe) {
    this.store.dispatch(ShoesActions.addShoeToCart({ shoe }));
  }
}
