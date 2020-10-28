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

export const getCurrentShoe = createSelector(
    getShoesFeatureState,
    state => state.currentShoe
)

export const shoesReducer = createReducer(
    initalState,
    on(createAction('[Shoe] add shoe to cart'), (state): ShoeState => {
        return {
            ...state,
            shoesCart: [{test: 'test ' + state.shoesCart.length },...state.shoesCart]
        }
    }),
    on(createAction('[Shoe] set current shoe'), (state, action): ShoeState => {
        return {
            ...state,
            currentShoe: action?.shoe
        }
    }),
)