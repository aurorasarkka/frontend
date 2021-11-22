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
      new Question("Millainen lehtipihvisi saisi olla?"),
      new Question("Millaiseksi haluaisit ulkofileesi? "),
      new Question("Entäs sisäfileesi? ")
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
