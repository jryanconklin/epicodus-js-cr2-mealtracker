//Angular Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Custom Work
import { AppComponent } from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealEditComponent } from './meal-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    MealEditComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
