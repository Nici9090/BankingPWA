import {Component, OnInit} from '@angular/core';
import {User} from './_models';
import {AuthenticationService, UserService} from './_services';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  get user() {
    return this.authService.user;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
