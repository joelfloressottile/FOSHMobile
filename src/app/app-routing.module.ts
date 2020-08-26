import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'questionnaires',
    loadChildren: () => import('./questionnaires/questionnaires.module').then( m => m.QuestionnairesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'medical-record',
    loadChildren: () => import('./medical-record/medical-record.module').then( m => m.MedicalRecordPageModule)
  },
  {
    path: 'record-view',
    loadChildren: () => import('./record-view/record-view.module').then( m => m.RecordViewPageModule)
  },
  {
    path: 'q-completion',
    loadChildren: () => import('./q-completion/q-completion.module').then( m => m.QCompletionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
