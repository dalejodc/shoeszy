import { ShoeState } from './shoes.reducer';
import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store'

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