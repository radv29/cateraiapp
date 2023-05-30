import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCalculationComponent } from './demo-calculation/personal-information/demo-calculation.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [      
  { path: 'demo-calculation', component: DemoCalculationComponent },
  { path:'welcome', component: WelcomePageComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
