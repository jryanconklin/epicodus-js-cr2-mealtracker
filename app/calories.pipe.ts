import { Pipe, PipeTransform } from '@angular/core';

import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], desiredCalories) {
    var output: Meal[] = [];

    if (desiredCalories === "Low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 300) {
          output.push(input[i]);
        }
      }
      output.sort();
      return output;
    } else if (desiredCalories === "High") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 300) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
//End transform
  }
// End CaloriesPipe
}
