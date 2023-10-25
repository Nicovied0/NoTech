import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent {
  constructor(private router: Router) { }


  goContact() {
    this.router.navigate(['contact'])
    window.scrollTo(0, 0)
  }
}
