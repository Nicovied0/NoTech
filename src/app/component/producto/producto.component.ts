
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  goLink(){
    window.open('https://agfire.vercel.app/','_blanck')
  }
}
