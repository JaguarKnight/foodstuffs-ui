import { Component, OnInit } from '@angular/core';
import { Foodstuff, FoodstuffsService } from './services/foodstuffs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foodstuffs-ui';

  constructor(private readonly foodstuffsService: FoodstuffsService) { }

  ngOnInit() {
    this.foodstuffsService.getFoodstuffsObs().subscribe((foodstuffs: Foodstuff[]) => {
      if (foodstuffs && foodstuffs.length) {
        this.title = foodstuffs[0].name;
      }
    })
  }
}
