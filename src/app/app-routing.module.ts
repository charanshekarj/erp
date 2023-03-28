import { TraitsListComponent } from './traits-list/traits-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { Phase1Component } from './phase1/phase1.component';
import { Phase5Component } from './phase5/phase5.component';
import { Phase4Component } from './phase4/phase4.component';
import { Phase3Component } from './phase3/phase3.component';
import { Phase2Component } from './phase2/phase2.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: TraitsListComponent,
    pathMatch: 'full'
  },
  {
    path: 'phase1',
    component: Phase1Component,
    pathMatch: 'full'
  },
  {
    path: 'phase2',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'phase3',
    component: Phase3Component,
    pathMatch: 'full'
  },
  {
    path: 'phase4',
    component: Phase4Component,
    pathMatch: 'full'
  },
  {
    path: 'phase5',
    component: Phase5Component,
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('../app/products/products.module').then(x => x.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    }), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
