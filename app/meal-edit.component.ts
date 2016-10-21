import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-edit',
  template: `
  <div *ngIf="childSelectedMeal">
    <h3>Edit {{childSelectedMeal.name}}</h3>

    <div class="">
      <label>Details: </label>
      <textarea [(ngModel)]="childSelectedMeal.details" placeholder="details"></textarea>
    </div>
    <div>
      <label>Calories: </label>
      <input [(ngModel)]="childSelectedMeal.calories" placeholder="calories"/>
    </div>

    <button class="btn btn-primary" (click)="doneEditingClicked()">Done Editing</button>
  </div>
  `
})

export class MealEditComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneEditingClickedSender = new EventEmitter();
  doneEditingClicked() {
    this.doneEditingClickedSender.emit();
  }

}
