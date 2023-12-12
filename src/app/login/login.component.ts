import { Component, OnInit } from '@angular/core';
import { UserAgentApplication } from 'msal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userData:any;
  userAgentApplication:any;

  constructor() {
  // constructor(private socialAuthService: any) {
    var applicationConfig = {
      clientID: 'YOUR_CLIENT_ID',
    };

    // this.userAgentApplication = new UserAgentApplication(applicationConfig.clientID, null, this.tokenReceivedCallback);
  }

  ngOnInit(): void {}

  public tokenReceivedCallback(errorDesc, token, error, tokenType) {
    if (token) {
      this.userData = token;
      console.log('Token: ' + token);
    } else {
      console.log(error + ':' + errorDesc);
    }
  }

  public microsoftSignIn() {
    var graphScopes = ['user.read', 'mail.send'];
    let that = this;

    that.userAgentApplication.loginPopup(graphScopes).then(
      function (idToken) {
        //Login Success
        that.userAgentApplication.acquireTokenSilent(graphScopes).then(
          function (accessToken) {
            console.log(accessToken);
            //AcquireTokenSilent Success
            var headers = new Headers();
            var bearer = 'Bearer ' + accessToken;
            headers.append('Authorization', bearer);
            var options = {
              method: 'GET',
              headers: headers,
            };
            var graphEndpoint = 'https://graph.microsoft.com/v1.0/me';

            fetch(graphEndpoint, options).then(function (response) {
              response.json().then(function (data) {
                that.userData = data;

                console.log(data);
              });
            });
          },
          function (error) {
            //AcquireTokenSilent Failure, send an interactive request.
            that.userAgentApplication.acquireTokenPopup(graphScopes).then(
              function (accessToken) {
                //updateUI();
              },
              function (error) {
                console.log(error);
              }
            );
          }
        );
      },
      function (error) {
        //login failure
        console.log(error);
      }
    );
  }
}
