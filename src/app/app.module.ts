import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './components/bank/bank.component';
import { ClientComponent } from './components/client/client.component';
import { RouterModule } from '@angular/router';
import { TransferOrderComponent } from './components/transfer-order/transfer-order.component';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    ClientComponent,
    TransferOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "client/:id" , component: ClientComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
