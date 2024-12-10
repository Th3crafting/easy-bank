import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgOptimizedImage} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { ProfileComponent } from './features/profile/profile.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProductRequestComponent } from './features/product-request/product-request.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductCreateComponent } from './features/product-create/product-create.component';
import { RequestListComponent } from './features/request-list/request-list.component';
import { DeliveryRequestComponent } from './features/delivery-request/delivery-request.component';
import { BankProductListComponent } from './features/bank-product-list/bank-product-list.component';
import { ClientProductListComponent } from './features/client-product-list/client-product-list.component';
import { DeliveryListComponent } from './features/delivery-list/delivery-list.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    DashboardComponent,
    ProductRequestComponent,
    ProductListComponent,
    ProductCreateComponent,
    RequestListComponent,
    DeliveryRequestComponent,
    BankProductListComponent,
    ClientProductListComponent,
    DeliveryListComponent,
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
