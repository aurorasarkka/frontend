import { Component, OnInit } from '@angular/core';
import {Question} from "../question";

@Component({
  selector: 'app-feedbackpage',
  templateUrl: './feedbackpage.component.html',
  styleUrls: ['./feedbackpage.component.css']
})
export class FeedbackpageComponent implements OnInit {
  formatLabel: any;
  questions: Array<Question> =
    [
      new Question("Kysymys 1"),
      new Question("Kysymys 2"),
      new Question("Kysymys 3")
    ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onInputChange(event: any,q:Question) {
    console.log(event.value)
    console.log(q.ask)
    q.setAnswer(event.value);
  }




}
