import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { usuarios } from 'src/app/app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  identificadorAdmin: string = 'admin'
  password: string = "";
  email: string = "";
  color: string = "";
  mensajeError: string = "";
  error: boolean = true;

  constructor(private router: Router) { }

  login(): void {
    const user = usuarios.find(u => u.email === this.email);
    if (user) {
      if (user.password === this.password) {

        this.color = 'exitoso';
        this.error = false;
        if (user.email.includes(this.identificadorAdmin)) {
          this.router.navigate(['/productlist']);
        } else {
          console.log('El usuario es ' + user.email)
        }

        this.email = '';
        this.password = '';


      } else {
        console.log('Contraseña incorrecta');
        this.error = true;
        this.color = 'error';
        this.mensajeError = 'La contraseña no es correcta, intentelo nuevamente.'
      }
    } else {
      console.log('Usuario no encontrado');
      this.error = true;
      this.color = 'error';
      this.mensajeError = 'Usuario no encontrado, intentelo nuevamente.'
    }
    console.log('El color es: ' + this.color)
  }
  registrar(): void {
    this.router.navigate(['/register']);
  }

}
