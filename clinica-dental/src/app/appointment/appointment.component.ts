import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "appointment-component",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.css"],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AppointmentComponent implements OnInit {
  appointmentData = {
    name: '',
    countryCode: '+01',
    phone: '',
    date: '',
    doctor: '', // llenado automático
    message: '',
    agreeToPolicy: false,
  };

  doctors: any[] = []; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el nombre del doctor 
    this.route.queryParams.subscribe(params => {
      this.appointmentData.doctor = params['doctor'] || ''; // Asignar el nombre del doctor que se recibe
    });

    this.fetchDoctors(); // Cargar la lista de doctores
  }

  fetchDoctors() {
    fetch('https://repoapi.ordenaris.com/api/listaDoctores', {
      headers: {
        'ordProyecto': 'a6093c23ae10457c8t0b8b298fc8b500',
        'ordCandidato': '552f893e5ed84d75b5bcde84919454a6'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success && data.list) {
          this.doctors = data.list; // Asignar la lista de doctores
        } else {
          console.error('Error en la respuesta de la API');
        }
      })
      .catch(error => console.error('Error fetching doctors:', error));
  }

  onSubmit() {
    if (this.appointmentData.agreeToPolicy) {
      console.log('Appointment submitted:', this.appointmentData);

      const requestBody = {
        nombre: this.appointmentData.name,
        telefono: this.appointmentData.phone,
        fecha: this.appointmentData.date,
        doctor: this.appointmentData.doctor,
        mensaje: this.appointmentData.message,
      };

      fetch('https://repoapi.ordenaris.com/api/mensaje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ordProyecto': 'a6093c23ae10457c8t0b8b298fc8b500',
          'ordCandidato': '552f893e5ed84d75b5bcde84919454a6',
        },
        body: JSON.stringify(requestBody),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Mensaje enviado:', data);
          this.resetForm(); // reiniciar el formulario limpio
        })
        .catch(error => {
          console.error('Error al enviar el mensaje:', error);
        });
    }
  }

  resetForm() {
    this.appointmentData = {
      name: '',
      countryCode: '+01',
      phone: '',
      date: '',
      doctor: '',
      message: '',
      agreeToPolicy: false,
    };
  }
}
