import { OrderRoutingModule } from './order.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ CommonModule , OrderRoutingModule ]
})
export class OrderModule {}