import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UserRoutingModule } from './user.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout.component';

@NgModule({
    imports: [ CommonModule , UserRoutingModule , FormsModule , HttpClientModule ],
    declarations : [LoginComponent,RegisterComponent,LogoutComponent],
    providers:[UserService]
})
export class UserModule {}