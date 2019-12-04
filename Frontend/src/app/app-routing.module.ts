import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeuserComponent } from './components/user/homeuser/homeuser.component';
import { DetailuserComponent } from './components/user/detailuser/detailuser.component';
import { RegisteruserComponent } from './components/user/registeruser/registeruser.component';
import { EdituserComponent } from './components/user/edituser/edituser.component';
import { AddcreditComponent } from './components/credit/addcredit/addcredit.component';
import { CreditsComponent } from './components/credit/credits/credits.component';

const routes: Routes = [
  {path: '', component: HomeuserComponent},
  {path: 'home', component: HomeuserComponent},
  {path: 'detailUser/:id', component: DetailuserComponent},
  {path: 'addUser', component: RegisteruserComponent},
  {path: 'editUser/:id', component: EdituserComponent},
  //
  {path: 'addCredit/:id', component: AddcreditComponent},
  {path: 'credits/:id', component: CreditsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
