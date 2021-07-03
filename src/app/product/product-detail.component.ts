import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent{

    cp = {};

    constructor(private ar:ActivatedRoute,private ps:ProductService) {
        let id = this.ar.snapshot.params["id"];
        this.ps.getProductById(id).subscribe((data:any[])=>{
            this.cp = data[0];
        })
     }

}
