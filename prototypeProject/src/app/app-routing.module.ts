import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./customerFlow/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./customerFlow/pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./customerFlow/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'confirmed-order',
    loadChildren: () => import('./customerFlow/pages/confirmed-order/confirmed-order.module').then( m => m.ConfirmedOrderPageModule)
  },
  {
    path: 'receipt',
    loadChildren: () => import('./customerFlow/pages/receipt/receipt.module').then( m => m.ReceiptPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
