import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent{

    imgURL = "https://www.lifewire.com/thmb/i-0cqhac6yrNACitaM7HB73R3pQ=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/html-space-tag-3466504-790ad68444894806b801ea997b6d6bfc.png";

    products = [];

    constructor(private ps:HttpClient) { 
        this.ps.get("https://ecommercebyrk.herokuapp.com/products/getAllProducts").subscribe((data:any[])=>{
            this.products = data;
        })
    }
}