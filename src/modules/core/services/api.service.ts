import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Fellow } from 'src/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getFellowList(): Observable<Array<Fellow>> {
    return this.http.get<Array<Fellow>>(`${environment.API_URL}employees`);
  }
}
