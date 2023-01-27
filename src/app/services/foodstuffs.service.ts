import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Foodstuff {
  name: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class FoodstuffsService {

  constructor(private readonly http: HttpClient) { }

  getFoodstuffs(): Foodstuff[] {
    let foodstuffs: Foodstuff[] = [];
    const response = this.http.get<Foodstuff[]>("http://localhost:3000/foodstuffs").subscribe((data: Foodstuff[]) => {
      console.log("data: ", data);
      foodstuffs = data;
    })

    return foodstuffs;
  }

  getFoodstuffsObs(): Observable<Foodstuff[]> {
    return this.http.get<Foodstuff[]>("http://localhost:3000/foodstuffs");
  }
}
