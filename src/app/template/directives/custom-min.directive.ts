import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

//Para poder utilizarla en su declaracion es necesario indicar selector: '[custonMin][ngModel]'
//La directiva solo puede ser utilizada si esta asociada a un ngModel, sino se tiene ese campo en 
//el selector y en la propiedad del HTML no podra utilizarse.
//El selector es la forma en que se india a Angular que lo busque.
//La directiva debe declararse (en declarations) en el template.module para que funcione
@Directive({
    selector: '[custonMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator{

    @Input() minimo!: number;

    constructor(){ }
    
    validate( control: FormControl ) {
        const inputValue = control.value;
        console.log('inputValue', inputValue);
        console.log('Minimo', this.minimo);
        return ( inputValue < this.minimo ) ? { 'customMin': true } : null ; 
    }
}