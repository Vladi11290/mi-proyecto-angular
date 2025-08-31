import { Component, signal } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { NgFor, NgIf } from '@angular/common';
import { SeccionServicios } from './seccion-servicios/seccion-servicios';
import { SeccionSobreMiComponent } from './seccion-sobre-mi.component';
import { SeccionContactoComponent } from './seccion-contacto/seccion-contacto';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SeccionServicios, SeccionSobreMiComponent, SeccionContactoComponent, Footer, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  images = [
    'assets/img2.jpg',
    'assets/imagen.jpg',
    'assets/img3.jpg'
  ];

  currentSlide = signal(0);

  nextSlide() {
    this.currentSlide.update(i => (i + 1) % this.images.length);
  }

  prevSlide() {
    this.currentSlide.update(i => (i - 1 + this.images.length) % this.images.length);
  }

  goToSlide(i: number) {
    this.currentSlide.set(i);
  }
}
