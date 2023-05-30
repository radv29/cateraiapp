import { HeightUnit } from "../enums/HeightUnit";
import { Gender } from "../enums/Gender";
import { WeightUnit } from "../enums/WeightUnit";


export interface IPersonalInformation {

    gender: Gender;
    age: number;
    weightUnit: WeightUnit;
    weight: number;
    heightUnit: HeightUnit;
    heightInCm: number;
    heightInFt: number;
    heightInIn: number;
    noOfMeals: number;
    noOfSnacks: number;
    objective: string;

}