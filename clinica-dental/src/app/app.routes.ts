import { Routes } from '@angular/router';
import { DentalClinicLandingComponent } from './DentalClinicLanding.component'; 
import { HeroComponent } from './hero/hero.component'; 
import { ServicesComponent } from './servicios/services.component';
import { HistoryComponent } from './historia/history.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AppointmentComponent } from './appointment/appointment.component'; 

export const routes: Routes = [
  {
    path: '',
    component: DentalClinicLandingComponent,
    children: [
      { path: '', component: HeroComponent }, //default home
      { path: 'services', component: ServicesComponent }, // Servicios component
      { path: 'about-us', component: HistoryComponent }, // History component
      { path: 'register', component: NewsletterComponent }, // neswletter component
      { path: 'appointment', component: AppointmentComponent }, // appointment component
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
