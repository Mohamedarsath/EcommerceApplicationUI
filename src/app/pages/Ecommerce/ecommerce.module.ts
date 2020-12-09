import { NgModule } from '@angular/core';

import { EcommerceRoutingModule } from './ecommerce-routing.module';

import { EcommerceComponent } from './ecommerce.component';


@NgModule({
  imports: [EcommerceRoutingModule],
  declarations: [EcommerceComponent],
  exports: [EcommerceComponent]
})
export class EcommerceModule { }
