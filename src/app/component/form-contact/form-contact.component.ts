import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  formData = {
    name: '',
    email: '',
    typePost: 'Seleccionar',
    texts: '',
    score: 3
  };

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.http.post('https://alarmgeofireback.up.railway.app/publications/new', this.formData)
      .subscribe(
        (response) => {
          console.log('Solicitud POST exitosa', response);
          this.router.navigate(['/'])
        },
        (error) => {
          console.error('Error al enviar la solicitud POST', error);
        }
      );
  }
}
