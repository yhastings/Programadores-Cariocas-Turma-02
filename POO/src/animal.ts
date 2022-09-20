export abstract class Animal {
    especie: string;
    idade: number;
    familia: string;
    nome: string;

    constructor(
        especie: string,
        idade: number,
        familia: string,
        nome: string
    ){
        this.especie = especie
        this.idade = idade
        this.familia = familia
        this.nome = nome
    }

    correr():void{
    }

    cacar():void{

    }
    dormir():void{
    }

}