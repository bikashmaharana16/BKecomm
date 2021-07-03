import { ProductDetailComponent } from './product-detail.component';
import { DisplayProductComponent } from './display-product.component';
import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product.routing';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [ CommonModule , ProductRoutingModule , HttpClientModule ],
    declarations : [AddProductComponent,DisplayProductComponent,ProductDetailComponent],
    providers:[ProductService]
})
export class ProductModule {}