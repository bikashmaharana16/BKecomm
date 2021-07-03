import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

    data = null;

    isLogin(){
        if(this.data!=null){
            return true;
        }
        else
            return false;
    }

    setLogin(loginInfo){
        this.data = loginInfo;
    }

    getLogin(){
        return this.data;
    }

}