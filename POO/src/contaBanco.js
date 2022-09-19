"use strict";
exports.__esModule = true;
exports.ContaBanco = void 0;
var ContaBanco = /** @class */ (function () {
    function ContaBanco(titular, agencia, conta, saldo) {
        this.titular = titular;
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }
    ContaBanco.prototype.verSaldo = function () {
        console.log("O saldo da sua conta \u00E9 ".concat(this.saldo));
    };
    ContaBanco.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$ ".concat(valor, " realizado com sucesso"));
        }
        else {
            console.log("Saque de R$ ".concat(valor, " impossivel de ser realizado"));
        }
    };
    ContaBanco.prototype.deposito = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Deposito de R$ ".concat(valor, " realizado com sucesso"));
        }
        else {
            console.log("Deposito de R$ ".concat(valor, " impossivel de ser realizado "));
        }
    };
    return ContaBanco;
}());
exports.ContaBanco = ContaBanco;
