import { Funcionarioi } from "./funcionarioi";
import { Pessoai } from "./pessoai";

export class Trabalhoi implements Pessoai, Funcionarioi {
    endereco: string;
    telefone: string;
    nome: string;
    salario: number;
    falar(): void {
        throw new Error("Method not implemented.");
    }
    andar(): void {
        throw new Error("Method not implemented.");
    }
    correr(): void {
        throw new Error("Method not implemented.");
    }
    
    verSalario(): void {
        throw new Error("Method not implemented.");
    }
}