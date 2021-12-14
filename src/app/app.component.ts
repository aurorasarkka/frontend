import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthenticationServiceService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Authentication via Firebase';

}




