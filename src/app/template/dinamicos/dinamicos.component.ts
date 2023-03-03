import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Alberto',
    favoritos: [
      { id: 1, nombre: 'Metal Gear'},
      { id: 2, nombre: 'Silent Hill'},
    ]
  };

  nuevoJuego: string = '';

  agregarJuego(): void{

    if(this.nuevoJuego.trim().length === 0){
      return;
    }

    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };

    this.persona.favoritos.push( { ...nuevoFavorito } );
    this.nuevoJuego = '';
  }

  guardar(){

  }

  eliminar( index: number ):void {
    this.persona.favoritos.splice(index, 1);
  }

}
