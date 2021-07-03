import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ProductService {
    constructor(private hc:HttpClient){

    }

    getProducts(){
        return this.hc.get("https://ecommercebyrk.herokuapp.com/products/getAllProducts");
    }

    getProductById(id){
        return this.hc.get("https://ecommercebyrk.herokuapp.com/products/getProductById/"+id);
    }
}