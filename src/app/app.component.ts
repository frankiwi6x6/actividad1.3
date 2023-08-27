import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor() { }

}
export const usuarios = [{
  id: 1,
  rut: "",
  email: "",
  name: "",
  last_name: "",
  user_type: "",
  user_enabled: true,
  phone: "",
  address: "",
  password: ""
}
]