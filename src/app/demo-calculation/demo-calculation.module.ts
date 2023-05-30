import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoCalculationComponent } from './personal-information/demo-calculation.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule }from '@angular/material/input';
import { MatSelectModule }from '@angular/material/select';
import { MatButtonModule }from '@angular/material/button';
import { MatCheckboxModule }from '@angular/material/checkbox';
import { MatChipsModule }from '@angular/material/chips';
import { MealListComponent } from './meal-list/meal-list/meal-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DemoCalculationComponent,
    MealListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ]
})
export class DemoCalculationModule { }
