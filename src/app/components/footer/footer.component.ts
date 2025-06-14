import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Aos from "aos";

@Component({
  selector: "footer-component",
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'], 
   
 })
export class FooterComponent {
  ngAfterViewInit() {
          Aos.init(); // Initialize AOS
                    }
}
