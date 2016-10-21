//Angular Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Custom Components
import { AppComponent } from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealEditComponent } from './meal-edit.component';
import { MealAddComponent } from './meal-add.component';

//Custom Pipes
import { CaloriesPipe } from './calories.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    MealEditComponent,
    MealAddComponent,
    CaloriesPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
