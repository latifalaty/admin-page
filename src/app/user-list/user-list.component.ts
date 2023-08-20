import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: string[] = ['User 1', 'User 2', 'User 3'];

  constructor(private router: Router) { }

  goToCreateUser() {
    this.router.navigate(['/user-create']);
  }
}

