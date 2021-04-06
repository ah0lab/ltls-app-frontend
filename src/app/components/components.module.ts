import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {LtlsSoundTestComponent} from './ltls-sound-test/ltls-sound-test.component';


@NgModule({
  declarations: [LoginComponent, LtlsSoundTestComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    LtlsSoundTestComponent
  ]
})
export class ComponentsModule { }
