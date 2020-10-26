import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'

export interface ShoeState {
    currentShoe: {};
    shoesCart: Array<any>
}

export const initalState : ShoeState = {
    currentShoe: null,
    shoesCart: []
}

export const getShoesFeatureState = createFeatureSelector<ShoeState>('shoes');

export const getCurrentCart = createSelector(
    getShoesFeatureState,
    state => state.shoesCart
)

export const shoesReducer = createReducer(
    initalState,
    on(createAction('[Shoe] add shoe to cart'), state => {
        return {
            ...state,
            shoesCart: [{test: 'test ' + state.shoesCart.length },...state.shoesCart]
        }
    })
)