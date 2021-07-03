import { SecurityGuard } from './../shared/security.guard';
import { ProductDetailComponent } from './product-detail.component';
import { DisplayProductComponent } from './display-product.component';
import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {path:"addProduct",component : AddProductComponent},
    {path:"displayProduct",component : DisplayProductComponent,canActivate:[SecurityGuard]},
    {path:"productDetail/:id",component : ProductDetailComponent}
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
