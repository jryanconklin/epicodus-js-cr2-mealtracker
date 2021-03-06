import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-edit',
  template: `
  <div *ngIf="childSelectedMeal">

    <h3>Edit {{childSelectedMeal.name}}</h3>
    <div class="form-group">
      <label>Details: </label>
      <textarea [(ngModel)]="childSelectedMeal.details" placeholder="details"></textarea>
    </div>
    <div class="form-group">
      <label>Calories: </label>
      <input [(ngModel)]="childSelectedMeal.calories" placeholder="calories"/>
    </div>
    <button class="btn btn-primary" (click)="doneEditingClicked()">Done Editing</button>

  </div><!--End ngIf Div -->
  `
})

export class MealEditComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneEditingClickedSender = new EventEmitter();
  doneEditingClicked() {
    this.doneEditingClickedSender.emit();
  }

}
