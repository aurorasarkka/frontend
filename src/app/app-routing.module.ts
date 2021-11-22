import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {FeedbackpageComponent} from "./feedbackpage/feedbackpage.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {path: 'calculator', component: CalculatorComponent},
  {path: '' , redirectTo: '/calculator', pathMatch: 'full'},

  {path: 'feedbackpage', component: FeedbackpageComponent},
  {path: '' , redirectTo: '/feedbackpage', pathMatch: 'full'},

  {path: 'form', component: FormComponent},
  {path: '' , redirectTo: '/form', pathMatch: 'full'}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
