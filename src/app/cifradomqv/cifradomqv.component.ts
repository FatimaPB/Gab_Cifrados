import { Component } from '@angular/core';
import { ec as EC } from 'elliptic';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cifradomqv',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './cifradomqv.component.html',
  styleUrls: ['./cifradomqv.component.css']
})
export class CifradomqvComponent {
  private ec = new EC('p256'); // Inicializamos la curva elíptica P-256
  clavePrivadaA: string = '';
  clavePrivadaB: string = '';
  claveCompartida: string = '';

  // Función para generar un par de claves
  generarParDeClaves() {
    const claveA = this.ec.genKeyPair(); 
    const claveB = this.ec.genKeyPair();

  
    this.clavePrivadaA = claveA.getPrivate('hex');
    this.clavePrivadaB = claveB.getPrivate('hex');

    return { claveA, claveB }; // Devolvemos las claves generadas
  }

  // Función para calcular la clave compartida
  async calcularClaveCompartida(claveA: any, claveB: any) {
    const clavePublicaA = claveA.getPublic('hex'); 
    const clavePublicaB = claveB.getPublic('hex'); 

    // Derivamos la clave compartida para A y B
    const compartidaA = claveA.derive(this.ec.keyFromPublic(clavePublicaB, 'hex').getPublic()).toString(16);
    const compartidaB = claveB.derive(this.ec.keyFromPublic(clavePublicaA, 'hex').getPublic()).toString(16);

    // Verificamos que ambas claves compartidas son iguales
    if (compartidaA === compartidaB) {
      // Convertimos la clave compartida a un ArrayBuffer
      const bufferCompartido = new Uint8Array(compartidaA.match(/.{1,2}/g)!.map((byte: string) => parseInt(byte, 16))).buffer;

      // Usamos la API de Web Crypto para hacer un hash de la clave compartida
      const bufferHash = await crypto.subtle.digest('SHA-256', bufferCompartido);
      const arrayHash = Array.from(new Uint8Array(bufferHash));
      this.claveCompartida = arrayHash.map((b: number) => b.toString(16).padStart(2, '0')).join(''); // Convertimos a hexadecimal
    }
  }

  // Función manejadora para generar las claves y calcular la clave compartida
  async manejarGenerarClaves() {
    const { claveA, claveB } = this.generarParDeClaves(); // Generamos las claves
    await this.calcularClaveCompartida(claveA, claveB); // Calculamos la clave compartida
  }
}
