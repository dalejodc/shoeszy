import { createReducer, on } from '@ngrx/store';

import { Shoe } from '../shoe';
import * as ShoesAction from './shoes.actions'

export interface ShoeState {
    currentShoe: Shoe;
    currentShoeSelectedImagePreview: string;
    shoesCart: Array<number>,
    shoes: Shoe[],
}

export const initalState: ShoeState = {
    currentShoe: null,
    currentShoeSelectedImagePreview: null,
    shoesCart: [],
    shoes: [],
}

export const shoesReducer = createReducer(
    initalState,
    on(ShoesAction.addShoeToCart, (state, action): ShoeState => {
        return {
            ...state,
            shoesCart: [action.shoe.id, ...state.shoesCart]
        }
    }),
    on(ShoesAction.removeShoeFromCart, (state, action): ShoeState => {
        return {
            ...state,
            shoesCart: state.shoesCart.filter(item => item != action.shoeId)
        }
    }),
    on(ShoesAction.setCurrentShoe, (state, action): ShoeState => {
        let currentShoeSelectedImagePreview = null;

        if (action.shoe.photos.length > 0) {
            currentShoeSelectedImagePreview =  action.shoe.photos[0];
        }

        return {
            ...state,
            currentShoe: action.shoe,
            currentShoeSelectedImagePreview: currentShoeSelectedImagePreview
        }
    }),
    on(ShoesAction.setCurrentShoePreviewImage, (state, action): ShoeState => {
        return {
            ...state,
            currentShoeSelectedImagePreview: action.image
        }
    }),
    on(ShoesAction.clearCurrentShoe, (state, action): ShoeState => {
        return {
            ...state,
            currentShoe: null
        }
    }),
    on(ShoesAction.loadShoesSuccess, (state, action) => {
        return {
            ...state,
            shoes: action.shoes
        }
    })
)