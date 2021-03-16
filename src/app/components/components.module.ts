import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class ComponentsModule { }
