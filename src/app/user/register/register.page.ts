import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { usuarios } from 'src/app/app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage {
  mensajeError: string = "";
  error: boolean = false;
  usuarios: any[] = []; 
  constructor(private router: Router) { }

  id: number = this.usuarios.length + 1;
  rut: string = "";
  email: string = "";
  name: string = "";
  last_name: string = "";
  user_type: string = "trabajador";
  user_enabled: boolean = true;
  phone: string = "";
  address: string = "";

  register() {
    const nuevoUsuario = {
      id: this.id,
      rut: this.rut,
      email: this.email,
      name: this.name,
      last_name: this.last_name,
      user_type: this.user_type,
      user_enabled: this.user_enabled,
      phone: this.phone,
      address: this.address
    };
    if (this.rut == "" || this.email == "" || this.name == "" || this.last_name == "" || this.user_type == "" || this.phone == "" || this.address == "") {
      this.error = true;
      this.mensajeError = "Debe completar todos los campos";
    } else {

      this.usuarios.push(nuevoUsuario);

      this.router.navigate(['/productlist']);

      this.id = this.usuarios.length + 1;
      this.rut = "";
      this.email = "";
      this.name = "";
      this.last_name = "";
      this.user_enabled = true;
      this.phone = "";
      this.address = "";
    }
  }
}