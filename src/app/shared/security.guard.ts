import { SessionService } from './session.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class SecurityGuard implements CanActivate {

    constructor(private ss:SessionService,private router:Router){

    }

    canActivate(){
        let login = this.ss.isLogin();

        if(login)
            return login;
        else
            this.router.navigate(["/user/login"])

    }
}
