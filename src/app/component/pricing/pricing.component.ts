import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

  constructor(private router: Router) { }

  goCotizacion() {
    this.router.navigate(['contact'])
    window.scrollTo(0, 0)
  }
}
