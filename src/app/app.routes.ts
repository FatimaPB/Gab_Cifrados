import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CifradoCesarComponent } from './cifradocesar/cifradocesar.component';
import { CifradoescitalaComponent } from './cifradoescitala/cifradoescitala.component';
import { GuiaComponent } from './guia/guia.component';
import { CifradoideaComponent } from './cifradoidea/cifradoidea.component';
import { Blake3Component } from './blake3/blake3.component';
import { CifradomqvComponent } from './cifradomqv/cifradomqv.component';


export const routes: Routes = [
  { path: '', component: InicioComponent }, // Ruta para el inicio
  { path: 'cifrados/cesar', component: CifradoCesarComponent }, // Ruta para Cifrado César
  { path: 'cifrados/escitala', component: CifradoescitalaComponent }, // Ruta para Cifrado escitala
  { path: 'cifrados/idea', component: CifradoideaComponent }, // Ruta para Cifrado idea
  { path: 'cifrados/mqv', component: CifradomqvComponent }, // Ruta para Cifrado mqv
  { path: 'cifrados/blake3', component: Blake3Component }, // Ruta para Cifrado mqv
  { path: 'guia', component: GuiaComponent }, // Ruta para Cifrado escitala
  // Otras rutas...
];
