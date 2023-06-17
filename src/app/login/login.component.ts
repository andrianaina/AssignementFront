import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='root';
  pwd= 'root';

  UsernameInput = '';
  PwdInput = '';
  myForm: FormGroup;

  constructor(
    private authService:AuthService, 
    private router:Router,
    // private assigmmentsService:AssignmentsService
  ) {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      pwd: new FormControl('')
    });
  }


  onSubmit() {
    if(this.UsernameInput ===this.username && this.PwdInput === this.pwd){
      this.authService.logIn();
      this.router.navigate(["/home"]);
    }
    else{
      alert('mdp invalid');
    }
  }
}
