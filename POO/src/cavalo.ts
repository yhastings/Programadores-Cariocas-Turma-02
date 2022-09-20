import { Animal } from "./animal";

export class Cavalo extends Animal{

    cor: string

    constructor(
        cor: string,
        especie: string,
        idade: number,
        familia: string,
        nome: string
    ){
        super(especie,idade,familia,nome)
        this.cor = cor
    }

    cacar(): void {
        console.log("Estou caçando igual um cavalo")
    }

    correr(): void {
    
    }

    dormir(): void {
        
    }



}