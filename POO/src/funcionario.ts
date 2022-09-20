import { Pessoadois } from "./pessoadois";

export class Funcionario extends Pessoadois {
    cod: string;
    cargo: string;
    ct: string;
    salario: number

    constructor(
        nome: string,
        cpf: string,
        rg: string,
        cidade: string,
        idade: number,
        cod: string,
        cargo: string,
        ct: string,
        salario: number
    ){
        super(nome, cpf, rg, cidade, idade)
        this.cod = cod
        this.cargo = cargo
        this.ct = ct
        this.salario = salario

    }

    verFuncionario(){
        console.log(`${this.nome}, ${this.idade}, ${this.cargo}, ${this.salario}`)
    }
}