import { Component } from '@angular/core';

interface Componente{

  icon: string; 

  name: string; 

  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [

    {

      icon: 'bag-add-outline',

      name: 'Anticonceptivos',

      redirecTo: '/anticonceptivos'

    },

    {

      icon: 'medical-outline',

      name: 'Enfermedades',

      redirecTo: '/enfermedades'

    },

    {

      icon: 'person-circle-outline',

      name: 'Registrarse',

      redirecTo: '/registrarse'

    },

  ];
}