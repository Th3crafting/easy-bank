import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './features/home/home.component';
import {LoginComponent} from './features/login/login.component';
import {RegisterComponent} from './features/register/register.component';
import {ForgotPasswordComponent} from './features/forgot-password/forgot-password.component';
import {ProfileComponent} from './features/profile/profile.component';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {ProductRequestComponent} from './features/product-request/product-request.component';
import {ProductListComponent} from './features/product-list/product-list.component';
import {ProductCreateComponent} from './features/product-create/product-create.component';
import {RequestListComponent} from './features/request-list/request-list.component';
import {DeliveryRequestComponent} from './features/delivery-request/delivery-request.component';
import {BankProductListComponent} from './features/bank-product-list/bank-product-list.component';
import {ClientProductListComponent} from './features/client-product-list/client-product-list.component';
import {DeliveryListComponent} from './features/delivery-list/delivery-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product-request', component: ProductRequestComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'request-list', component: RequestListComponent},
  {path: 'delivery-request', component: DeliveryRequestComponent},
  {path: 'bank-product-list', component: BankProductListComponent},
  {path: 'client-product-list', component: ClientProductListComponent},
  {path: 'delivery-list', component: DeliveryListComponent},

  {path: 'product-request/:productType', component: ProductRequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
