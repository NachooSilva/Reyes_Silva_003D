import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  usuario = {
    email:'',
    password:'',
    nombre:'',
    text:''

  }

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
