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
      import('../modules/fellow/fellow.module').then(
        (m) => m.FellowModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
