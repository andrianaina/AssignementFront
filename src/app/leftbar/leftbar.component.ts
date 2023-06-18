import { Component } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { AuthService } from '../shared/auth.service';

import {  Router } from '@angular/router';
import { LocalStorageService } from '../shared/local-storage.service';
@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent {
  menus: Array<{
    icon: string;
    title: string;
    link: string;
    show: boolean
  }> = [
      {
        icon: '../../../assets/icons/add.svg',
        title: 'Ajouter Assignement',
        link: '/add',
        show: true
      },
      {
        icon: '../../../assets/icons/agenda.svg',
        title: 'Liste',
        link: '/home',
        show: true
      }
    ];
    constructor(
      private assigmmentsService:AssignmentsService,private authService:AuthService, 
      private router:Router,
      private localS: LocalStorageService) {
      
    };
    labelConnexion = "Se connecter";

    creerDonneesDeTest() {
      this.assigmmentsService.peuplerBDavecForkJoin()
      .subscribe(() => {
        window.location.reload();
      });
    }
    getLabelConnexion() {
      if(this.localS.isLoggedIn() === true) {
        const username = this.localS.getItem<
        { 
          id: number, 
          role: string, 
          access_token: string,
          username: string 
        }
        >('myuser')?.username;
        return 'Se déconnecter(' + username + ')'
      }
      return "Se connecter";
    }
    login() {
      // utilise l'authService pour se connecter
      if(!this.localS.isLoggedIn()) {
        this.labelConnexion = "Se déconnecter";
        this.router.navigate(["/login"]);
      } else {
        this.authService.logOut();
        // et on navigue vers la page d'accueil
        this.router.navigate(["/home"]);
      }
    }
}
