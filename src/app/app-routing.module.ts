import { ShoesShellComponent } from './shoes/shoes-shell/shoes-shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShoesShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/shoes/shoes.module').then(m => m.ShoesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
