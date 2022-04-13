import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fellow-list',
    pathMatch: 'full',
  },
  {
    path: 'fellow-list',
    loadChildren: () =>
      import('../modules/fellow-list/fellow-list.module').then(
        (m) => m.FellowListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
