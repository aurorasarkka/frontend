import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {FeedbackComponent} from "./feedbackpage/feedback.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {FormComponent} from "./form/form.component";
import {ReactiveformComponent} from "./reactiveform/reactiveform.component";
import {CinemaComponent} from "./cinema/cinema.component";
import {NewsFilterPipe} from "./news-filter.pipe";
import {LoginComponent} from "./login/login.component";
import {MaintenanceComponent} from "./maintenance/maintenance.component";
import {TenttiComponent} from "./tentti/tentti.component";


const routes: Routes = [
  {path: 'calculator', component: CalculatorComponent},
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},

  {path: 'feedbackpage', component: FeedbackComponent},
  {path: '', redirectTo: '/feedbackpage', pathMatch: 'full'},

  {path: 'form', component: FormComponent},
  {path: '', redirectTo: '/form', pathMatch: 'full'},

  {path: 'reactiveform', component: ReactiveformComponent},
  {path: '', redirectTo: '/reactiveform', pathMatch: 'full'},

  {path: 'cinema', component: CinemaComponent},
  {path: '', redirectTo: '/cinema', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/LogIn', pathMatch: 'full'},

  {path: 'maintenance', component: MaintenanceComponent},
  {path: '', redirectTo: '/Maintenance', pathMatch: 'full'},

  {path: 'tentti', component: TenttiComponent},
  {path: '', redirectTo: '/tentti', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule,]
})
export class AppRoutingModule {
}
