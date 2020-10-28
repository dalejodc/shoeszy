import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { getCurrentShoe, getCurrenShoeSelectedImagePreview } from './../state/shoes.reducer';
import * as ShoesActions from '../state/shoes.actions'
import { Shoe } from './../shoe';

@Component({
  selector: 'app-shoes-show',
  templateUrl: './shoes-show.component.html',
  styleUrls: ['./shoes-show.component.scss']
})
export class ShoesShowComponent implements OnInit {

  constructor(private store: Store) { }

  selectedImagePreview: string = '';
  shoe: Shoe | any;

  ngOnInit(): void {
    this.store.select(getCurrentShoe).subscribe(shoe => {
      this.shoe = shoe;
      this.setImagePreview(this.shoe);
    })

    this.store.select(getCurrenShoeSelectedImagePreview).subscribe(image => {
      this.selectedImagePreview = image
    })
  }

  setImagePreview(shoe: Shoe) {
    if (shoe && shoe.photos.length > 0) {
      this.selectedImagePreview = shoe.photos[0];
    }
  }

  selectImage(image) {
    this.store.dispatch(ShoesActions.setCurrentShoePreviewImage({ image }))
  }
}
