import { AboutComponent } from './about.component';
import { ProductService } from './product/product.service';
import { SecurityGuard } from './shared/security.guard';
import { SessionService } from './shared/session.service';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app.routing';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
 

@NgModule({
    imports : [BrowserModule,ProductModule,CartModule,AppRoutingModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()],
    declarations : [AppComponent,HomeComponent,ContactComponent,AboutComponent],
    providers:[SessionService,SecurityGuard],
    bootstrap : [AppComponent]
})
export class AppModule{

}