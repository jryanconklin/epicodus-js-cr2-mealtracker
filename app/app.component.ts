// Angular Libraries
import { Component, OnInit } from '@angular/core';

//Custom Paths
import { Meal } from './meal.model';
import { MealService } from './meal.service';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <div class="row">
      <h3>{{title}}</h3>
      <div class="col-sm-12">
        <table class="table table-bordered">
          <thead class="inverse">
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>calories</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let meal of masterMealList"
              [class.selected]="meal === selectedMeal"
              (click)="onSelect(meal)">
              <td>{{ meal.name }}</td>
              <td>{{ meal.details }}</td>
              <td>{{ meal.calories }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  <!-- End Container Div -->
  </div>
  `,
  providers: [MealService]
})

export class AppComponent implements OnInit {
  title = 'Ryan\'s Meal Tracker';
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
    console.log(this.selectedMeal);
  }

// End App Component
}
