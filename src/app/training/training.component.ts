import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  myText: string;

  constructor() {
    this.myText = "Viikonloppu";
  }

  ngOnInit(): void {
  }


  showText() {
    ('toimiiko?');
    console.log('toimiiko tää?');
  }
}

function oSlideChanger() {

}

