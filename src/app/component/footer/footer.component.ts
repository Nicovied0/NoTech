import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router, private renderer: Renderer2) { }

  navigateToProduct(componentId: string) {
    this.router.navigate(['/products']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(componentId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
  navigateToService(componentId: string) {
    this.router.navigate(['/services']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(componentId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
}
