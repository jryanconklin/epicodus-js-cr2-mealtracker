
import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';

import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
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
          <tr *ngFor="let currentMeal of childMealList"
            [class.selected]="currentMeal === selectedMeal">
            <td>{{ currentMeal.name }}</td>
            <td>{{ currentMeal.details }}</td>
            <td>{{ currentMeal.calories }}</td>
            <td><button (click)="editButton(currentMeal)">Edit</button></td>
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



//End Meal List Component
}
