import { SessionService } from './../shared/session.service';
import { UserService } from './user.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    user = new User();

    constructor(private toastr: ToastrService,private us:UserService,private router:Router,private ss:SessionService) { }

    ngOnInit() { }

    login(){
        this.us.login(this.user).subscribe((data)=>{
            this.ss.setLogin(data);
            this.toastr.success('success', 'Valid User');
            this.router.navigate(["/displayProduct"]);
        },(errorResponse)=>{
            console.log(errorResponse);
            this.toastr.error('Failure', errorResponse.error["msg"]);
        })
    }
}