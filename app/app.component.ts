// Angular Libraries
import { Component, Input, Output, OnInit } from '@angular/core';

//Custom Paths
import { Meal } from './meal.model';
import { MealService } from './meal.service';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
    <div class="row">
      <h3>{{title}}</h3>
      <meal-list
        [childMealList]="masterMealList"
        (editButtonClickSender)="showEdit($event)"
      ></meal-list>

      <meal-edit
      [childSelectedMeal]="selectedMeal"
      (doneEditingClickedSender)="finishedEditing()"
      ></meal-edit>

      <meal-add
        (newMealSender)="addMeal($event)"
      ></meal-add>

  <!-- End Row Div -->
    </div>
  <!-- End Container Div -->
  </div>
  `,
  providers: [MealService]
})

export class AppComponent implements OnInit {
  title = 'Ryan\'s Meal Tracker';
  masterMealList: Meal[];
  selectedMeal: Meal = null;

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

  showEdit(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
    console.log(clickedMeal);
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

  constructor(private mealService: MealService) { }

  getMeals(): void {
    this.mealService.getMeals().then(masterMealList => this.masterMealList = masterMealList);
    console.log(this.masterMealList);
  }

  //Lifecycle Hook Grabs getMeals on Init
  ngOnInit(): void {
    this.getMeals();
  }

  // From Angular Docs, Think of Way to Implement Later - Could be Handy to Delete a Meal?
  // onSelect(meal: Meal): void {
  //   this.selectedMeal = meal;
  //   console.log(this.selectedMeal);
  // }

// End App Component
}
