import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'team-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  doctors: any[] = [];
  currentIndex = 0;
  visibleDoctors = 4; // Valor predeterminado para pantallas tipo web

  constructor(private router: Router) { 
    this.fetchDoctors();
    this.updateVisibleDoctors(window.innerWidth); // Inicializar según el tamaño de la pantalla
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
        console.log('API Response:', data);
        if (data.success && data.list) {
          this.doctors = data.list; // Asignar la lista de doctores
        } else {
          console.error('Error en la respuesta de la API');
        }
      })
      .catch(error => console.error('Error fetching doctors:', error));
  }

  prevDoctor() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextDoctor() {
    if (this.currentIndex < this.doctors.length - this.visibleDoctors) {
      this.currentIndex++;
    }
  }

  get displayedDoctors() {
    return this.doctors.slice(this.currentIndex, this.currentIndex + this.visibleDoctors);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateVisibleDoctors(event.target.innerWidth);
  }

  updateVisibleDoctors(width: number) {
    this.visibleDoctors = width < 991 ? 1 : 4; // Muestra 1 doctor en pantallas pequeñas, 4 en grandes
  }


  selectDoctor(doctorName: string) {
    this.router.navigate(['/appointment'], { queryParams: { doctor: doctorName } });
  }
}
