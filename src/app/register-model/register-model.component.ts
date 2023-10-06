import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';
import { FormControl, Validators } from '@angular/forms';







@Component({
  selector: 'app-register-model',
  templateUrl: './register-model.component.html',
  styleUrls: ['./register-model.component.css']
})
export class RegisterModelComponent implements OnInit {

  username: string = '';
  password: string = '';
  email:string=''

  hidePassword: boolean = true;
  loginRegister: boolean = false;
  registerLogin: boolean = true;


  constructor(private apiService: ApiService, private route: Router, private modelService: ModalService) { }





 





  ngOnInit(): void {

  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  register() {
    // Implement your Register logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Email', this.email);

    // Make an HTTP POST request to your Django backend's authentication endpoint
    this.sendRegisterDataTobackend();


    this.username = '';
    this.password = '';
    // this.email = "";



  };

  sendRegisterDataTobackend() {

    let registerData = {}
    registerData = {
      username: this.username,
      password: this.password,
      email: this.email
    };

    this.apiService.registerUser(registerData).subscribe((response) => {

        // Successfully received a JWT token from the backend
      // Store the token and handle the user's authentication here
      const message = response.message;
    
        console.log(response.message);
        alert(response.message)

  
      // Redirect to dashboard or perform any necessary actions for authenticated users
      // this.route.navigate(['/dashboard'])
      // this.modelService.dialog.closeAll()

    },
      (error) => {
        // Handle login failure (e.g., display an error message)
        //set Error message to bedisplayed to th UI
        let message=""
        if (error.status === 400) {
          const errorResponse = error.error;
          
          if (errorResponse.username) {
            console.error('Username error:', errorResponse.username[0]);
            // Handle the username error here
            message+=errorResponse.username[0];
          }
          if (errorResponse.email) {
            console.error('Email error:', errorResponse.email[0]);
            // Handle the email error here
            message+=" "+errorResponse.email[0];
          }
        } else {
          console.error('Registration failed with unknown error:', error);
          message="Registration failed with unknown error Try Again";
        }
        alert(message);
        

      }
    )



  }

  login() {
    // Implement your Login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Make an HTTP POST request to your Django backend's authentication endpoint

    this.sendLoginDataTobackend();
    this.apiService.setCurrentUser(this.username)
    this.username = '';
    this.password = '';

  }

  sendLoginDataTobackend() {
    let loginData = {}
    loginData = {
      username: this.username,
      password: this.password,
    };

    this.apiService.loginUser(loginData).subscribe((response) => {
      // Successfully received a JWT token from the backend
      // Store the token and handle the user's authentication here
      const token = response.access;
      const userId = response.user_id;

      

      this.apiService.setToken(token)
      this.apiService.setUserId(userId)
      console.log(this.apiService.getToken())
      console.log(this.apiService.getUserId())
      
     

      // Redirect to dashboard or perform any necessary actions for authenticated users
      this.route.navigate(['/dashboard'])
      this.modelService.dialog.closeAll();

    },
      (error) => {
        // Handle login failure (e.g., display an error message)
        //set Error message to bedisplayed to th UI
        console.error('Login failed:', error);
        alert("User Does Not Exist")

      }
    );
  }

  showLogin() {
    this.loginRegister = !this.loginRegister;
    this.registerLogin = !this.registerLogin
  }


}
