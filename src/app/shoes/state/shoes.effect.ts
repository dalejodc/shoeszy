import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { ShoesService } from './../shoes.service';
import * as ShoesAction from './shoes.actions';

@Injectable({
    providedIn: 'root'
})
export class ShoeEffects {

    constructor(private acionts$: Actions, private shoesService: ShoesService){}

    loadShoes$ = createEffect(() => {
        return this.acionts$.pipe(
            ofType(ShoesAction.loadShoes),
            mergeMap(() => this.shoesService.getShoes().pipe(
                map(shoes => ShoesAction.loadShoesSuccess({ shoes }))
            ))
        )
    })
}