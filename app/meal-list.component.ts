
import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';

import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `

    <label>Filter by Calories: </label>
    <select (change)="onChange($event.target.value)">
      <option value="All">All Items</option>
      <option value="Low">Low</option>
      <option value="High">High</option>
    </select>

    <div class="col-sm-12">
      <table class="table table-bordered">
        <thead class="inverse">
          <tr>
            <th>Name</th>
            <th>Details</th>
            <th>Calories</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let currentMeal of childMealList | calories:selectedCalories">
            <td>{{ currentMeal.name }}</td>
            <td>{{ currentMeal.details }}</td>
            <td>{{ currentMeal.calories }}</td>
            <td><button class="btn btn-warning" (click)="editButton(currentMeal)">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editButtonClickSender = new EventEmitter();

  editButton(mealToEdit: Meal) {
    this.editButtonClickSender.emit(mealToEdit);
  }

  public selectedCalories: string = "All";
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }


//End Meal List Component
}
