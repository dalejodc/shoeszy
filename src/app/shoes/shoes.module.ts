import { ShoeEffects } from './state/shoes.effect';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { shoesReducer } from './state/shoes.reducer';
import { ShoesShellComponent } from './shoes-shell/shoes-shell.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { ShoesShowComponent } from './shoes-show/shoes-show.component';

const shoesRoutes: Routes = [
  { path: '', component: ShoesShellComponent }
];

@NgModule({
  declarations: [
    ShoesListComponent,
    ShoesShowComponent
  ],
  imports: [
    RouterModule.forChild(shoesRoutes),
    StoreModule.forFeature('shoes', shoesReducer),
    EffectsModule.forFeature([ ShoeEffects ]),
    CommonModule
  ],
  exports: [
    ShoesListComponent,
    ShoesShowComponent
  ]
})
export class ShoesModule { }
