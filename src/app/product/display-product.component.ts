import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'display-product',
    templateUrl: './display-product.component.html'
})
export class DisplayProductComponent{

    products = [];

    constructor(private ps:ProductService) { 
        this.ps.getProducts().subscribe((data:any[])=>{
            this.products = data;
        })
    }
}
