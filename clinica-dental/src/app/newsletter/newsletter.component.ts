import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "newsletter-component",
  templateUrl: "./newsletter.component.html",
  styleUrls: ["./newsletter.component.css"],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
// Almacenamiento de datos ingresados
export class NewsletterComponent {
  firstName: string = ''; 
  email: string = '';     

  onSubmit() {
    if (!this.firstName.trim()) {
      console.log('Por favor, ingresa tu nombre.');
      return; 
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.email.trim() || !emailPattern.test(this.email)) {
      console.log('Por favor, ingresa un correo electrónico válido.');
      return; 
    }
  
    console.log('Suscripción:', { firstName: this.firstName, email: this.email });
  
    //llamada a la API
    fetch('https://repoapi.ordenaris.com/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ordProyecto': 'a6093c23ae10457c8t0b8b298fc8b500',
        'ordCandidato': '552f893e5ed84d75b5bcde84919454a6',
      },
      body: JSON.stringify({
        nombre: this.firstName,
        correo: this.email,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Suscripción exitosa:', data);
      })
      .catch(error => {
        console.error('Error al suscribirse:', error);
      });
      
      this.firstName = '';
      this.email = '';
  }  
  
}
