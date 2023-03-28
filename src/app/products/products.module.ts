import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { TraitsListComponent } from './traits-list/traits-list.component';
import { TraitsSingleComponent } from './traits-single/traits-single.component';


@NgModule({
  declarations: [
    TraitsListComponent,
    TraitsSingleComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
