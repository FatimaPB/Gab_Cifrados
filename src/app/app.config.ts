import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Asegúrate de que esta ruta sea correcta

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
