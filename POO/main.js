"use strict";
exports.__esModule = true;
// import { Pessoa } from "./src/pessoa";
var contaBanco_1 = require("./src/contaBanco");
// let pessoaUm = new Pessoa();
// pessoaUm.nome = "Debora / Pekky";
// pessoaUm.cpf = "235.568.695-38";
// pessoaUm.idade = 18;
// pessoaUm.telefone = "(21) 98456-8147";
// console.log(`O nome da pessoa é: ${pessoaUm.nome} `);
var conta1 = new contaBanco_1.ContaBanco("Liza", "005-4", "4002-52", 500);
conta1.saldo = 0;
console.log(conta1.saldo);
