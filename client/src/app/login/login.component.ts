import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  constructor(private userService: UserService,
    private router: Router ) { }

  ngOnInit() {
  }

  login() {
    const user = {
      username: this.username,
      password: this.password
    };
    this.userService.login(user).subscribe((response: any) => {
      const res = response;
      if (res.isPresent === true) {
        if ( res.correctPassword === true ) {
          localStorage.setItem('user', JSON.stringify(res.user));
          
          this.router.navigate(['/']);
        } else {
         
        }
      } else {
        
      }
    });
  }

}
