import { Component } from '@angular/core';

@Component({
  selector: 'app-producto2',
  templateUrl: './producto2.component.html',
  styleUrls: ['./producto2.component.css']
})
export class Producto2Component {

  goLink() {
    window.open('https://bvsc.vercel.app/', '_blanck')
  }
}
