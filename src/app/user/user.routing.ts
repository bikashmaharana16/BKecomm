import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';

const routes: Routes = [
    {path:"login",component : LoginComponent},
    {path:"register",component : RegisterComponent},
    {path:"logout",component : LogoutComponent}
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
