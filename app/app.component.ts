// Angular Libraries
import { Component, OnInit } from '@angular/core';

//Custom Paths
import { Meal } from './meal.model';
import { MealService } from './meal.service';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <h3>{{title}}</h3>
    <ul class="meals">
      <li *ngFor="let meal of masterMealList"
        [class.selected]="meal === selectedMeal"
        (click)="onSelect(meal)">
        {{ meal.name }} - {{ meal.description }} - {{ meal.calories }}
      </li>
    </ul>
  </div>
  `,
  providers: [MealService]
})

export class AppComponent implements OnInit {
  title = 'Meal Tracker';
  masterMealList: Meal[];
  selectedMeal: Meal;

  constructor(private mealService: MealService) { }

  getMeals(): void {
    this.mealService.getMeals().then(masterMealList => this.masterMealList = masterMealList);
    console.log(this.masterMealList);
  }

  //Lifecycle Hook Grabs getMeals on Init
  ngOnInit(): void {
    this.getMeals();
  }

  onSelect(meal: Meal): void {
    this.selectedMeal = meal;
  }

// End App Component
}
