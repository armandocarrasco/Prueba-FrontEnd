import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "features-component",
  templateUrl:"./features.component.html",
  styleUrls: ["./features.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class FeaturesComponent {}
