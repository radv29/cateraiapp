import { Component, Input } from '@angular/core';
import { mealPlan } from 'src/app/shared/models/mealPlan';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent {
  @Input() isMealPlanCalculated = false; 
  @Input() mealPlan!: mealPlan;
}
