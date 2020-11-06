import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

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

  selectedImagePreview$: Observable<string> | string = '';
  shoe$: Observable<Shoe>;

  ngOnInit(): void {

    this.shoe$ = this.store.select(getCurrentShoe).pipe(tap(
      shoe => this.setImagePreview(shoe)
    ));

    this.selectedImagePreview$ = this.store.select(getCurrenShoeSelectedImagePreview)
  }

  setImagePreview(shoe: Shoe) {
    if (shoe && shoe.photos.length > 0 && !this.selectedImagePreview$) {
      this.selectedImagePreview$ = shoe.photos[0];
    }
  }

  selectImage(image) {
    this.store.dispatch(ShoesActions.setCurrentShoePreviewImage({ image }))
  }
}
