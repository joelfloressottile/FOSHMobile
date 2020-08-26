import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QCompletionPage } from './q-completion.page';

const routes: Routes = [
  {
    path: '',
    component: QCompletionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QCompletionPageRoutingModule {}
