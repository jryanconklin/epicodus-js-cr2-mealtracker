import { Component, Output, EventEmitter } from '@angular/core';

import { Meal } from './meal.model';

@Component ({
  selector: 'meal-add',
  template: `
    <hr>
    <h3>Add Meal</h3>
    <form class="form-inline">
      <div class="form-group">
        <label>Name</label>
        <input #newName>
      </div>
      <div class="form-group">
        <label>Details</label>
        <input #newDetails>
      </div>
      <div class="form-group">
        <label>Calories</label>
        <input #newCalories>
      </div>
      <button class="btn btn-success" (click)="addMealClicked(newName.value, newDetails.value, newCalories.value);
        newName.value ='';
        newDetails.value='';
        newCalories.value='';
        ">Add Meal</button>
    </form>
    <hr>
  `
})

export class MealAddComponent {
  @Output() newMealSender = new EventEmitter();

  addMealClicked(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
