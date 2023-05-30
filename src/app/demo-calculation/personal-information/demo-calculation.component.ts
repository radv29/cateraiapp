import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeightUnit } from '../../shared/enums/HeightUnit';
import { IPersonalInformation } from '../../shared/models/personal-information'
import { DemoCalculationService } from '../demo-calculation.service';
import { mealPlan } from 'src/app/shared/models/mealPlan';

@Component({
  selector: 'app-demo-calculation',
  templateUrl: './demo-calculation.component.html',
  styleUrls: ['./demo-calculation.component.scss']
})
export class DemoCalculationComponent implements OnInit{

  demoCalculationForm!: FormGroup;
  heightUnit!: HeightUnit;
  mealPlan!: mealPlan;
  showLoader: boolean = false;
  isMealPlanCalculated: boolean = false;

  readonly HeightUnit = HeightUnit;

  constructor(
    private formBuilder: FormBuilder,
    private demoService: DemoCalculationService
  ) {}

  ngOnInit() {
    this.demoCalculationForm = this.formBuilder.group({
      gender: ['', [
        Validators.required
      ]],
      age: ['', [
        Validators.required
      ]],
      weightUnit: ['', [
        Validators.required
      ]],
      weight: ['', [
        Validators.required
      ]],
      heightUnit: ['', [
        Validators.required
      ]],
      heightInCm: ['', [

      ]],
      heightInFt: ['', [

      ]],
      heightInIn: ['', [

      ]],
      noOfMeals: ['', [
        Validators.required
      ]],
      noOfSnacks: ['', [
        Validators.required
      ]],
      objective: ['', [
        Validators.required
      ]],
    })
  }

  onSelect(): void {
    this.heightUnit = this.demoCalculationForm.value.heightUnit;
  }

  generatePrompt(info: IPersonalInformation): string {
    if(info.heightUnit === HeightUnit.CENTIMETERS) {
    return 'Act as a nutritionist. I am ' +info.age+ 
    ' years old male. I meassure ' + info.weight + ' ' + info.weightUnit + 
    ' and ' + info.heightInCm + ' ' + info.heightUnit +
    '. My goal is to ' + info.objective + 
    '. Give me a complete meal plan containing ' + info.noOfMeals + 
    ' meals a day and ' + info.noOfSnacks + 
    ' in JSON array format, where each element of the array represents a meal/snack. Follow this pattern: {"mealArray": [ {"meal": (meal or snack and the number, for example: meal 1, meal 2), "contents": ["food", "food", etc..]  }], "avgCalories": average_number_of_calories}' 
  } else {
      return 'Act as a nutritionist. I am ' +info.age+ 
      ' years old male. I meassure ' + info.weight + ' ' + info.weightUnit + 
      ' and ' + info.heightInFt + info.heightUnit + ' and ' + info.heightInIn + ' inches ' +
      '. My goal is to ' + info.objective + 
      '. Give me a complete meal plan containing ' + info.noOfMeals + 
      ' meals a day and ' + info.noOfSnacks + 
      ' in JSON array format, where each element of the array represents a meal/snack. Follow this pattern: {"mealArray": [ {"meal": (meal or snack and the number, for example: meal 1, meal 2), "contents": ["food", "food", etc..]  }], "avgCalories": average_number_of_calories}';
    }
  }

  onSubmit(): void {
    const personalInfo: IPersonalInformation = {
      gender: this.demoCalculationForm.controls['gender'].value,
      age: this.demoCalculationForm.controls['age'].value,
      weightUnit: this.demoCalculationForm.controls['weightUnit'].value,
      weight: this.demoCalculationForm.controls['weight'].value,
      heightUnit: this.demoCalculationForm.controls['heightUnit'].value,
      heightInCm: this.demoCalculationForm.controls['heightInCm'].value,
      heightInFt: this.demoCalculationForm.controls['heightInFt'].value,
      heightInIn: this.demoCalculationForm.controls['heightInIn'].value,
      noOfMeals: this.demoCalculationForm.controls['noOfMeals'].value,
      noOfSnacks: this.demoCalculationForm.controls['noOfSnacks'].value,
      objective: this.demoCalculationForm.controls['objective'].value
    }
    console.log(personalInfo);
    this.showLoader = true;
      this.demoService.getDataFromOpenAI(this.generatePrompt(personalInfo)).subscribe( data => {
      if(data) {
        this.showLoader = false;
        this.isMealPlanCalculated = true;
      }
      this.mealPlan = JSON.parse(data);

  });
  }

}

