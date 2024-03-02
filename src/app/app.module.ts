import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './demo/service/authInterceptor.service';
import { SessionInterceptor } from './demo/service/sessionInterceptor.service';
import { AuthService } from './demo/service/auth.service';
import { CropService } from './demo/service/crop.service';
import { FarmService } from './demo/service/farm.service';
import { FieldService } from './demo/service/field.service';
import { SessionService } from './demo/service/session.service';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SessionInterceptor,
            multi: true,
        },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        AuthService,
        CropService,
        FarmService,
        FieldService,
        SessionService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
