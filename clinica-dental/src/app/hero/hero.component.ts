import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "hero-component",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class HeroComponent {}
