import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private localS: LocalStorageService, 
    private routers: Router,
    // private errorService:ErrorService
  ) {
    
  }
  user = '';
  pwd ='';


  onSubmit() {
    // this.myservice.login(this.myForm).subscribe({
    //   next: (value) => {
    //     this.localS.setItem('myuser', value);
    //     this.localS.redirect();
    //     this.errorService.showSuccess('Succès de la connexion','Succès');
    //   },
    //   error:(err)=> {
    //     this.errorService.showWarning(err.error.message ,'');
    //   }
    // }   
    // );
    if(this.user === 'root' && this.pwd === 'root'){
      this.localS.setItem('myuser', { 
        id: 1, 
        role: 'admin', 
        access_token: 1234,
        username: 'user test' 
      }
      );
      
      this.routers.navigateByUrl('home');
      //     this.localS.redirect();
      //     this.errorService.showSuccess('Succès de la connexion','Succès');
    }
    else{
      alert('Error');
    }
  }
}
