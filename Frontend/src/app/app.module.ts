import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteruserComponent } from './components/user/registeruser/registeruser.component';
import { HomeuserComponent } from './components/user/homeuser/homeuser.component';
import { DetailuserComponent } from './components/user/detailuser/detailuser.component';
import { EdituserComponent } from './components/user/edituser/edituser.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcreditComponent } from './components/credit/addcredit/addcredit.component';
import { CreditsComponent } from './components/credit/credits/credits.component';
import { HeaderComponent } from './components/general/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisteruserComponent,
    HomeuserComponent,
    DetailuserComponent,
    EdituserComponent,
    AddcreditComponent,
    CreditsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
