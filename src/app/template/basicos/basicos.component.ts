import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  //Con la propiedad viewChild es posible recuperar elementos del DOM
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }

  nombreValido(): boolean {
    return this.miFormulario?.form.controls['producto']?.invalid 
        && this.miFormulario?.form.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.form.controls['precio']?.touched 
        && this.miFormulario?.form.controls['precio']?.value < 0;
  }

  guardar(){
    console.log(this.miFormulario);
    console.log('Posteo Correcto');
    //Al hacer un reset del formulario se puede indicar algunos valores por defecto, es opcional
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

  // guardar(miFormulario: NgForm){
  //   console.log(miFormulario.value);
  // }
}
