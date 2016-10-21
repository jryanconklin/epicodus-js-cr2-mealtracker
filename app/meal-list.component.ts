import { Component, Input, Output, EventEmitter } from '@angular/core';

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
          <tr *ngFor="let meal of childMealList"
            [class.selected]="meal === selectedMeal"
            (click)="onSelect(meal)">
            <td>{{ meal.name }}</td>
            <td>{{ meal.details }}</td>
            <td>{{ meal.calories }}</td>
            <td><button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];

  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}
