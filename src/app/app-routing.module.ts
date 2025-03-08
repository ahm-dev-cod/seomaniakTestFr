import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'seomaniak-test',
    loadChildren: () => import('./seomaniak-test/seomaniak-test.module')
    .then(m => m.SeomaniakTestModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
