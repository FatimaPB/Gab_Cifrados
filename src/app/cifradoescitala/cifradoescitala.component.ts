import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar esto
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-cifradoescitala',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Incluye FormsModule aquí
  templateUrl: './cifradoescitala.component.html',
  styleUrls: ['./cifradoescitala.component.css'] // Asegúrate de que este archivo exista
})
export class CifradoescitalaComponent {
  mensaje: string = ''; // Mensaje a cifrar o descifrar
  clave: number = 4; // Número de columnas (clave), predeterminado a 4
  resultado: string = ''; // Resultado del cifrado o descifrado

  // Función para cifrar el mensaje
  cifrarMensaje() {
    const mensajeSinEspacios = this.mensaje.replace(/\s/g, ''); // Eliminar espacios
    const numColumnas = this.clave; // Usar el número de columnas especificado
    const numFilas = Math.ceil(mensajeSinEspacios.length / numColumnas); // Calcular número de filas
    let mensajeCifrado = '';

    // Crear una matriz para las columnas
    const matriz: string[][] = Array.from({ length: numFilas }, () => Array(numColumnas).fill(''));

    // Llenar la matriz
    for (let i = 0; i < mensajeSinEspacios.length; i++) {
      const fila = Math.floor(i / numColumnas);
      const columna = i % numColumnas;
      matriz[fila][columna] = mensajeSinEspacios[i];
    }

    // Leer la matriz por columnas (cifrado)
    for (let c = 0; c < numColumnas; c++) {
      for (let f = 0; f < numFilas; f++) {
        if (matriz[f][c]) {
          mensajeCifrado += matriz[f][c]; // Agregar letra en orden de columna
        }
      }
    }

    this.resultado = mensajeCifrado;
  }

  // Función para descifrar el mensaje
  descifrarMensaje() {
    const mensajeCifrado = this.mensaje; // Usar el mensaje introducido como cifrado
    const numColumnas = this.clave; // Usar el número de columnas especificado
    const numFilas = Math.ceil(mensajeCifrado.length / numColumnas); // Calcular el número de filas
    let mensajeDescifrado = '';

    // Calcular cuántas columnas estarán llenas completamente y cuántas no
    const charsInFullColumns = mensajeCifrado.length % numColumnas; // Columnas que tienen más caracteres
    const charsPerColumn = Math.floor(mensajeCifrado.length / numColumnas); // Número mínimo de caracteres por columna

    // Crear la matriz para descifrar el mensaje
    const matriz: string[][] = Array.from({ length: numFilas }, () => []);

    let index = 0;

    // Llenar las columnas primero con las letras del mensaje cifrado
    for (let c = 0; c < numColumnas; c++) {
      const numCharsInColumn = charsPerColumn + (c < charsInFullColumns ? 1 : 0); // Determina cuántos caracteres tiene cada columna
      for (let f = 0; f < numCharsInColumn; f++) {
        matriz[f][c] = mensajeCifrado[index];
        index++;
      }
    }

    // Leer la matriz por filas (descifrado)
    for (let f = 0; f < numFilas; f++) {
      for (let c = 0; c < numColumnas; c++) {
        if (matriz[f][c]) {
          mensajeDescifrado += matriz[f][c];
        }
      }
    }

    this.resultado = mensajeDescifrado; // Actualizar el resultado con el mensaje descifrado
  }

  // Función para copiar el resultado al portapapeles
  copiarResultado() {
    navigator.clipboard.writeText(this.resultado);
  }
}
