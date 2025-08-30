import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion-contacto',
  standalone: true,
  imports: [],
  templateUrl: './seccion-contacto.html',
  styleUrls: ['./seccion-contacto.css']
})

export class SeccionContactoComponent {
  enviarMensaje(event: Event): void {
    event.preventDefault(); // Para que no recargue la página
    console.log('Formulario enviado (simulado)');
    alert('¡Gracias por tu mensaje!');
  }
}

