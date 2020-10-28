import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'

import * as ShoesAction from './shoes.actions'

export interface ShoeState {
    currentShoe: {};
    currentShoeSelectedImagePreview: string;
    shoesCart: Array<any>
}

export const initalState: ShoeState = {
    currentShoe: null,
    currentShoeSelectedImagePreview: null,
    shoesCart: []
}

export const getShoesFeatureState = createFeatureSelector<ShoeState>('shoes');

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
        return {
            ...state,
            currentShoe: action.shoe,
            currentShoeSelectedImagePreview: null
        }
    }),
    on(ShoesAction.setCurrentShoePreviewImage, (state, action): ShoeState => {
        return {
            ...state,
            currentShoeSelectedImagePreview: action.image
        }
    })
)