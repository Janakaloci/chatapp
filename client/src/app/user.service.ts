import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  saveUser(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://afternoon-sea-82873.herokuapp.com/api/users', user, {headers: headers});
  }

  login(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://afternoon-sea-82873.herokuapp.com/api/login', user, {headers: headers});
  }

  loggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user != null ? true : false;
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getUsers() {
    return this.http.get('https://afternoon-sea-82873.herokuapp.com/api/users');
  }

  getChatRoomsChat(chatRoom) {
    return this.http.get('https://afternoon-sea-82873.herokuapp.com/chatroom/' + chatRoom);
  }
}
