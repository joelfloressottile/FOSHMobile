import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QCompletionPageRoutingModule } from './q-completion-routing.module';

import { QCompletionPage } from './q-completion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QCompletionPageRoutingModule
  ],
  declarations: [QCompletionPage]
})
export class QCompletionPageModule {}
