import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CalculatorComponent } from './calculator/calculator.component' ;
import {MatGridListModule} from "@angular/material/grid-list" ;
import {FormsModule} from "@angular/forms";
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormComponent } from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    CalculatorComponent,
    FeedbackpageComponent,
    ToolbarComponent,
    FormComponent
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
      MatInputModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
