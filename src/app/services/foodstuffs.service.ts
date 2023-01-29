import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface Foodstuff {
  name: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class FoodstuffsService {

  constructor(private readonly http: HttpClient) { }

  getFoodstuffs(): Observable<Foodstuff[]> {
    return this.http.get<Foodstuff[]>(`${environment.apiUrl}`);
  }
}
