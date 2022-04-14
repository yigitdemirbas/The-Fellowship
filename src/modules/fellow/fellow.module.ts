import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FellowListComponent } from './components/fellow-list/fellow-list.component';
import { CoreModule, SortPipe } from '../core';
import { FellowRoutingModule } from './fellow-routing.module';
import { FellowCardComponent } from './components/fellow-card/fellow-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FellowFilterComponent } from './components/fellow-filter/fellow-filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FellowListComponent,
    FellowCardComponent,
    FellowFilterComponent,
    SortPipe,
  ],
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    FellowRoutingModule,
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule,
  ],
})
export class FellowModule {}
