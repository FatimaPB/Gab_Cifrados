import { Component } from '@angular/core';

@Component({
  selector: 'app-guia',
  standalone: true,
  imports: [],
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css'] 
})
export class GuiaComponent {

   // Definición del método volverInicio
   volverInicio(): void {
    window.location.href = '/'; // Redirige al inicio
  }

}
