import { Shoe } from './../shoe';
import { createAction, props } from '@ngrx/store';

export const setCurrentShoe = createAction(
    '[Shoes] set current shoe',
    props<{ shoe: Shoe }>()
);

export const addShoeToCart = createAction(
    '[Shoes] add shoe to cart',
    props<{ shoe: Shoe }>()
);

