import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-testimonials',
  templateUrl: './new-testimonials.component.html',
  styleUrls: ['./new-testimonials.component.css']
})
export class NewTestimonialsComponent {
  constructor(private router:Router){}


  goContact() {
    this.router.navigate(['contact']);
    window.scrollTo(0, 0);
  }
}
