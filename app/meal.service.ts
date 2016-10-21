import { Injectable } from '@angular/core';

import { Meal } from './meal.model';
import { MEALS } from './mock-meals';

@Injectable()
  export class MealService {
    getMeals(): Promise<Meal[]> {
      return Promise.resolve(MEALS);
    }
  }
