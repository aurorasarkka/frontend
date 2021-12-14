import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TrainingComponent} from './training/training.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {CalculatorComponent} from './calculator/calculator.component' ;
import {MatGridListModule} from "@angular/material/grid-list" ;
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FeedbackComponent} from './feedbackpage/feedback.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormComponent} from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {QuestionsService} from "./services/questions.service";
import {CinemaComponent} from './cinema/cinema.component';
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {NewsFilterPipe} from "./news-filter.pipe";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {LoginComponent} from './login/login.component';
import {TenttiComponent} from './tentti/tentti.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    CalculatorComponent,
    FeedbackComponent,
    ToolbarComponent,
    FormComponent,
    ReactiveformComponent,
    CinemaComponent,
    MaintenanceComponent,
    NewsFilterPipe,
    LoginComponent,
    TenttiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    

  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
