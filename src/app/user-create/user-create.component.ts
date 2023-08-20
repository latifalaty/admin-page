import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  newUser: string = '';

  constructor(private router: Router) { }

  createUser() {
    // Ajout factice, pour des raisons de démonstration
    if (this.newUser.trim() !== '') {
      // Ajoutez le nouvel utilisateur à votre backend ou à une liste en mémoire
      this.router.navigate(['/user-list']);
    }
  }
}

