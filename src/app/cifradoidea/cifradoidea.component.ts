import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cifradoidea',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './cifradoidea.component.html',
  styleUrls: ['./cifradoidea.component.css'] 
})
export class CifradoideaComponent {
  texto: string = '';
  clave: string = ''; // Clave de 128 bits (16 caracteres)
  resultado: string = '';


  // Función para cifrar
  cifrar(texto: string, clave: string): string {
    let cifrado = '';
    for (let i = 0; i < texto.length; i++) {
      const charCode = texto.charCodeAt(i);
      const keyCharCode = clave.charCodeAt(i % clave.length); 
      const encryptedCharCode = charCode ^ keyCharCode; 
      cifrado += String.fromCharCode(encryptedCharCode);
    }
    return cifrado;
  }

  // Función para manejar el evento de cifrado
  handleCifrar(): void {
    if (this.clave.length !== 16) {
      alert("La clave debe tener 16 caracteres.");
      return;
    }
    this.resultado = this.cifrar(this.texto, this.clave);
  }

  // Función para manejar el evento de descifrado (en este caso, usar la misma función de cifrado porque es simétrico)
  handleDescifrar(): void {
    if (this.clave.length !== 16) {
      alert("La clave debe tener 16 caracteres.");
      return;
    }
    this.resultado = this.cifrar(this.texto, this.clave);
  }

  // Función para copiar el resultado al portapapeles
  copiarResultado(): void {
    navigator.clipboard.writeText(this.resultado).then(() => {
      alert("Resultado copiado al portapapeles.");
    });
  }
}
