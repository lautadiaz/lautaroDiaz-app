import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/utilidades/card/card.component';
import { Proyecto } from '../../models/proyectos.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  urlImagen: string = 'assets/images/';

  proyectos: Proyecto[] = [
    {
      titulo: 'Simple pagina de bienes raices',
      imagen: `${this.urlImagen}simpleBienesRaices.png`,
      texto: 'Maquetación de una página simple de bienes raíces usando CSS y haciéndola responsive con la utilización de flexbox, grid y media queries',
      url: 'https://lautadiaz.github.io/simpleBienesRaices/',
      urlRepo: 'https://github.com/lautadiaz/simpleBienesRaices'
    },
    {
      titulo: 'Tienda virtual',
      imagen: `${this.urlImagen}carrito.png`,
      texto: 'Maquetación simple de una página que simula una tienda virtual de cursos online',
      url: 'https://lautadiaz.github.io/simple_carrito/',
      urlRepo: 'https://github.com/lautadiaz/simple_carrito'
    },
    {
      titulo: 'Clon del login de netflix',
      imagen: `${this.urlImagen}clon_login_netflix.png`,
      texto: 'Clon del login de netflix realizado con Sass',
      url: 'https://lautadiaz.github.io/clon_login_netflix/',
      urlRepo: 'https://github.com/lautadiaz/clon_login_netflix'
    },
    {
      titulo: 'Bienes raices',
      imagen: `${this.urlImagen}Bienesraices_completa.png`,
      texto: 'Página más completa de bienes raíces utilizando CSS flexbox, grid, sass y se implementa un botón para modo nocturno',
      url: 'https://lautadiaz.github.io/bienesraices/',
      urlRepo: 'https://github.com/lautadiaz/bienesraices'
    },
    {
      titulo: 'Cartelera',
      imagen: `${this.urlImagen}cartelera_app.png`,
      texto: 'Página que utiliza una API para mostrar una cartelera de las últimas películas, mostrar su valoración y una descripción de esta. También cuenta con un buscador',
      url: 'https://lautadiaz.github.io/Angular-11-carteleraPeliculas/',
      urlRepo: 'https://github.com/lautadiaz/Angular-11-carteleraPeliculas'
    },
    {
      titulo: 'Youtube app',
      imagen: `${this.urlImagen}youtube_app.png`,
      texto: 'App que muestra una lista de videos de YouTube de un canal especifico consumiendo la API de YouTube y los reproduce en un modal',
      url: 'https://lautadiaz.github.io/Angular-13-youtubeApp/',
      urlRepo: 'https://github.com/lautadiaz/Angular-13-youtubeApp'
    },
    {
      titulo: 'To do list app',
      imagen: `${this.urlImagen}Todo_imagen.png`,
      texto: 'Una aplicación de lista de tareas realizada con angular y redux(ngrx)',
      url: 'https://lautadiaz.github.io/lista-tareas-redx-app/',
      urlRepo: 'https://github.com/lautadiaz/lista-tareas-redx-app'
    },
    {
      titulo: 'Ingresos y egresos',
      imagen: `${this.urlImagen}ingresoEgreso_app.png`,
      texto: 'Una aplicación básica en la que se puede controlar los ingresos y egresos que tiene una persona. Echa con Angular 14, Redux y un login y guardado de datos con Firebase',
      url: 'https://lautadiaz.github.io/ingreso-egreso-app/',
      urlRepo: 'https://github.com/lautadiaz/ingreso-egreso-app'
    },
    {
      titulo: 'Effects app',
      imagen: `${this.urlImagen}effects_app.png`,
      texto: 'Simple aplicación elaborada con Angular 14, NgRx y consumiendo REST API',
      url: 'https://lautadiaz.github.io/effects-app/',
      urlRepo: 'https://github.com/lautadiaz/effects-app'
    },
  ];

}
