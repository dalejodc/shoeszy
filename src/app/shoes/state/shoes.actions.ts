import { Shoe } from './../shoe';
import { createAction, props } from '@ngrx/store';

export const loadShoes = createAction(
    '[Shoes] load shoes'
)

export const loadShoesSuccess = createAction(
    '[Shoes] load success',
    props<{ shoes: Shoe[] }>()
);

export const loadShoesFailure = createAction(
    '[Shoes] error',
    props<{ error: string }>()
)

export const setCurrentShoe = createAction(
    '[Shoes] set current shoe',
    props<{ shoe: Shoe }>()
);

export const clearCurrentShoe = createAction(
    '[Shoes] clear curren shoe'
)

export const setCurrentShoePreviewImage = createAction(
    '[Shoes] set current shoe image preview',
    props<{ image: string }>()
);

export const addShoeToCart = createAction(
    '[Shoes] add shoe to cart',
    props<{ shoe: Shoe }>()
);

