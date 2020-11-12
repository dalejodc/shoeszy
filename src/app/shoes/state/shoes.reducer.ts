import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { Shoe } from '../shoe';

import * as ShoesAction from './shoes.actions'

export interface ShoeState {
    currentShoe: Shoe;
    currentShoeSelectedImagePreview: string;
    shoesCart: Array<any>,
    shoes: Shoe[],
}

export const initalState: ShoeState = {
    currentShoe: null,
    currentShoeSelectedImagePreview: null,
    shoesCart: [],
    shoes: [],
}

export const getShoesFeatureState = createFeatureSelector<ShoeState>('shoes');

export const getShoes = createSelector(
    getShoesFeatureState,
    state => state.shoes
)

export const getCurrentCart = createSelector(
    getShoesFeatureState,
    state => state.shoesCart
)

export const getCurrentShoe = createSelector(
    getShoesFeatureState,
    state => state.currentShoe
)

export const getCurrenShoeSelectedImagePreview = createSelector(
    getShoesFeatureState,
    state => state.currentShoeSelectedImagePreview
)

export const shoesReducer = createReducer(
    initalState,
    on(ShoesAction.addShoeToCart, (state, action): ShoeState => {
        return {
            ...state,
            shoesCart: [action.shoe, ...state.shoesCart]
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