import { Component } from '@angular/core';

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
}
