import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheets',
      redirecTo: '/data'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alerts',
      redirecTo: '/alerts'
    }
  ];
  constructor() {}

}

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}