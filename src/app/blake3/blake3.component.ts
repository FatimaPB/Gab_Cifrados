import { Component } from '@angular/core';
import { blake2b } from 'blakejs'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-blake3',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './blake3.component.html',
  styleUrls: ['./blake3.component.css']
})
export class Blake3Component {
  input: string = '';
  hash: string = ''; 

  // Método para manejar cambios en el input
  handleInputChange(event: Event): void {
    const target = event.target as HTMLInputElement; 
    this.input = target.value; 
  }

  // Método para calcular el hash
  calculateHash(): void {
    const data = new TextEncoder().encode(this.input); 
    const hashBuffer = blake2b(data); // Generamos el hash

    // Convertir a hexadecimal manualmente
    this.hash = Array.from(hashBuffer)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  }
}
