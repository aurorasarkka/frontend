import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CalculatorComponent } from './calculator/calculator.component' ;
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule} from "@angular/forms";
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';



@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    CalculatorComponent,
    FeedbackpageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatSlideToggleModule,
        FormsModule,
      MatSliderModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
