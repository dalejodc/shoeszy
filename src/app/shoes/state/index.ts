import { Shoe } from './../shoe';
import { ShoeState } from './shoes.reducer';
import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store'

export const getShoesFeatureState = createFeatureSelector<ShoeState>('shoes');

export const getShoes = createSelector(
    getShoesFeatureState,
    state => state.shoes
)

export const getCurrentCartIds = createSelector(
    getShoesFeatureState,
    (state) => state.shoesCart
)

export const getCurrentCart = createSelector(
    getCurrentCartIds, getShoes,
    (currentCartIds, shoes) => {
        let shoesCart: Shoe[] = [];

        currentCartIds.forEach(item =>
            shoes.forEach(shoe => {
                if (shoe.id == item) {
                    shoesCart.push(shoe);
                }
            })
        )

        return shoesCart;
    }
)

export const getCurrentShoe = createSelector(
    getShoesFeatureState,
    state => state.currentShoe
)

export const getCurrenShoeSelectedImagePreview = createSelector(
    getShoesFeatureState,
    state => state.currentShoeSelectedImagePreview
)