import { Component } from '@angular/core';

@Component({
  selector: 'app-producto3',
  templateUrl: './producto3.component.html',
  styleUrls: ['./producto3.component.css']
})
export class Producto3Component {

  goLink() {
    window.open('https://automarket-dev.vercel.app/', '_blanck')
  }

}
