import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor(private hc:HttpClient){

    }

    login(data){
        return this.hc.post("https://ecommercebyrk.herokuapp.com/users/login",data);
    }
    

    

}