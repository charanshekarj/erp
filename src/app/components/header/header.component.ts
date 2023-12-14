// header.component.ts

import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Add any logic or properties if needed
  constructor (private authService: AuthService) {

  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }

  login() {
    this.authService.login()
  }
  logout() {
    this.authService.logout()
  }
}
