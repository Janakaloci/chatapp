import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  Users;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      this.Users = users;
    });
  }

  getUser() {
    return this.userService.getLoggedInUser().username;
  }
}
