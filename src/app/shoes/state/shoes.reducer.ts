import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'

import * as ShoesAction from './shoes.actions'

export interface ShoeState {
    currentShoe: {};
    shoesCart: Array<any>
}

export const initalState: ShoeState = {
    currentShoe: null,
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
            currentShoe: action.shoe
        }
    }),
)