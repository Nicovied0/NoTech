import { Component } from "@angular/core";

@Component({
  selector: "app-producto4",
  templateUrl: "./producto4.component.html",
  styleUrls: ["./producto4.component.css"],
})
export class Producto4Component {
  goLink() {
    window.open("https://taskker.vercel.app/", "_blanck");
  }
}
