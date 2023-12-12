// header.component.ts

import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Add any logic or properties if needed

  constructor (private msalService: MsalService) {

  }

  isLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount != null;
  }

  login() {
    this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account);
    })
  }

  logout() {
    this.msalService.logout();
  }
}
