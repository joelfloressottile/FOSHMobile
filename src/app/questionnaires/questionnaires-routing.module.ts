import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnairesPage } from './questionnaires.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionnairesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnairesPageRoutingModule {}
