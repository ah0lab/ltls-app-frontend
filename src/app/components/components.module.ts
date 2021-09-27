import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {LtlsSoundTestComponent} from './ltls-sound-test/ltls-sound-test.component';
import { LtlsSoundTestCatComponent } from './ltls-sound-test-cat/ltls-sound-test-cat.component';
import { ViewTipsComponent } from './view-tips/view-tips.component';


@NgModule({
  declarations: [LoginComponent, LtlsSoundTestComponent, ViewTipsComponent, LtlsSoundTestCatComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    LtlsSoundTestComponent,
    LtlsSoundTestCatComponent,
    ViewTipsComponent
  ]
})
export class ComponentsModule { }
