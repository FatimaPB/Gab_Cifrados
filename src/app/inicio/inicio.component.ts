import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  ngAfterViewInit() {
    const container = document.querySelector('.inicio-container');
    if (container) {
      container.classList.add('show'); // Añadir clase para activar la animación
    }
  }

}
