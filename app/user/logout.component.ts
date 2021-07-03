import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'logout',
    templateUrl: 'logout.component.html',
})
export class LogoutComponent {
    user = new User();

    constructor(private toastr: ToastrService,private router:Router) { }


    logout(){
            this.toastr.success('success', 'Logout');
            this.router.navigate(["user/login"]);
        
    }
}