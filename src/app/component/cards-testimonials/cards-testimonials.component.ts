import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestimoniosService } from 'src/app/services/testimoniosService';


@Component({
  selector: 'app-cards-testimonials',
  templateUrl: './cards-testimonials.component.html',
  styleUrls: ['./cards-testimonials.component.css']
})
export class CardsTestimonialsComponent implements OnInit {
  testimonios: any[] = [];
  constructor(private router: Router, private testimoniosService: TestimoniosService) { }

  ngOnInit() {
    this.getTestimonios()
  }


  getTestimonios() {
    this.testimoniosService.getTestimonios().subscribe(
      res => {
        this.testimonios = res
      }
    )
  }
  

}
