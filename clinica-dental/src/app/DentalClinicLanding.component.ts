// Importar componentes
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; 
import { HeroComponent } from './hero/hero.component'; 
import { ServicesComponent } from './servicios/services.component';
import { KeyServicesComponent } from './keyServices/key-services.component';
import { FeaturesComponent } from './features/features.component';
import { CallToActionComponent } from './callToAction/CallToAction.component';
import { HistoryComponent } from './historia/history.component';
import { TeamComponent } from './team/team.component';
import { ClientReviewComponent } from './clientReview/clientReview.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-dental-clinic-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    KeyServicesComponent,
    FeaturesComponent,
    CallToActionComponent,
    HistoryComponent,
    TeamComponent,
    ClientReviewComponent,
    AppointmentComponent,
    NewsletterComponent,
    FooterComponent
  ],
  // Añadir Ids para redirecciones
  template: `
    <header-component></header-component>
    <main>
      <hero-component id="hero"></hero-component>
      <services-component id="services"></services-component>
      <key-services-component></key-services-component>
      <features-component id="LearnMore"></features-component>
      <call-to-action-component id="getStarted"></call-to-action-component>
      <history-component id="about"></history-component>
      <team-component></team-component>
      <client-review-component></client-review-component>
      <appointment-component id="appointment"></appointment-component>
      <newsletter-component id="register"></newsletter-component>
      <footer-component></footer-component>
    </main>
  `,
})
export class DentalClinicLandingComponent {}
