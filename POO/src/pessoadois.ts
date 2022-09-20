export class Pessoadois {
    nome: string;
    cpf: string;
    rg: string;
    cidade: string;
    idade: number;

    constructor(
        nome: string,
        cpf: string,
        rg: string,
        cidade: string,
        idade: number
    ) {
        this.nome = nome
        this.cpf = cpf
        this.rg = rg
        this.cidade = cidade
        this.idade = idade
    }

    verDados(){
        console.log(`O nome da pessoa é: ${this.nome}, \nO CPF é: ${this.cpf}, \nO RG é: ${this.rg}, \nE a sua cidade é: ${this.cidade}, \nSua idade é ${this.idade}`)
    }
}

