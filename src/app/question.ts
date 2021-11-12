export class Question {
  ask: string;
  answer:string;

  constructor(value: string) {
    this.ask = value;
    this.answer = 'ei vastausta';
  }

setAnswer(value:any){
    if (value == 1)
    {this.answer = "raaka"}
  else if (value == 2)
    {this.answer = " medium"}
  else if (value == 3)
    {this.answer = "kypsä"}


}
}
