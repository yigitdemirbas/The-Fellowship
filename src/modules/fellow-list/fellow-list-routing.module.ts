import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FellowListComponent } from './components/fellow-list/fellow-list.component';

const routes: Routes = [
  {
    path: '',
    component: FellowListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FellowListRoutingModule {}
