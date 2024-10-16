import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  activeSection: string = '';

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['hero', 'services', 'about', 'register', 'appointment'];
    let currentSection = '';

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentSection = section;
        }
      }
    });

    this.activeSection = currentSection;
  }
}
