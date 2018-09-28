import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AppModule } from '../../app/app.module';

@NgModule({
  declarations: [],
  imports: [
    IonicPageModule.forChild(LoginPage), AppModule
  ],
})
export class LoginPageModule {}
