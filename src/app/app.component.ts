import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
  MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cifrados';
  isMenuOpen = false; // Estado del menú

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Cambia el estado al hacer clic
  }

   // Método para cerrar el menú
   closeMenu() {
    this.isMenuOpen = false;
  }
  

  
}
