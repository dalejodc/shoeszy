import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FaqComponent } from './pages/faq/faq.component';
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
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
