import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraitsListComponent } from './traits-list/traits-list.component';
import { TraitsSingleComponent } from './traits-single/traits-single.component';

const routes: Routes = [
  {
    path: '',
    component: TraitsListComponent
  },
  {
    path: ':traitname',
    component: TraitsSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
