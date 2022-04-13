import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './services';
import { HeaderInterceptorService } from './interceptors';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HeaderInterceptorService,
          multi: true,
        },
      ],
    };
  }
}
