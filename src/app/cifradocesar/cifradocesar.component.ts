import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar esto

@Component({
  selector: 'app-cifradocesar',
  standalone: true,
  imports: [FormsModule],  // Incluye FormsModule aquí
  templateUrl: './cifradocesar.component.html',
  styleUrls: ['./cifradocesar.component.css']
})
export class CifradoCesarComponent {
  texto: string = '';
  desplazamiento: number = 3;
  resultado: string = '';

  // Función para cifrar el texto
  cifrar(texto: string, desplazamiento: number): string {
    return texto.replace(/[a-z]/gi, (char) => {
      const charCode = char.charCodeAt(0);
      const base = charCode >= 65 && charCode <= 90 ? 65 : 97; // Mayúscula o minúscula
      return String.fromCharCode(((charCode - base + desplazamiento) % 26) + base);
    });
  }

  // Función para manejar el evento de cifrado
  handleCifrar(): void {
    this.resultado = this.cifrar(this.texto, this.desplazamiento);
  }

  // Función para manejar el evento de descifrado
  handleDescifrar(): void {
    this.resultado = this.cifrar(this.texto, 26 - this.desplazamiento);
  }

  // Función para copiar el resultado al portapapeles
  copiarResultado(): void {
    navigator.clipboard.writeText(this.resultado);
  }
}
