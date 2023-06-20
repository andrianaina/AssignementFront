import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Application de gestion de devoirs à rendre';
  
  nom:string = "";
  currentRoute:string = "";

  constructor(private authService:AuthService, 
              private router:Router,
              private assigmmentsService:AssignmentsService) {
    console.log(router.url);

    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log(event.url);
        this.currentRoute = event.url;
      }
    });
  }

  

  isLogged() {
    if(this.authService.isLoggedIn()) {
      this.nom = "Michel Buffa";
    }
    return this.authService .isLoggedIn();
  }
}
