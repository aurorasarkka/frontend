import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatMenu} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {AuthenticationServiceService} from "../auth.service";
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  loginText: string;
  logoutText: string;
  userEmail$: BehaviorSubject<any>;

  constructor(private router: Router, private authService: AuthenticationServiceService) {
    this.loginText = "Log In";
    this.userEmail$ = this.authService.checkLogedInUser();
    this.logoutText = "Log Out";
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['login']);
  }

  logOut() {
    this.authService.logOut();

  }

}

