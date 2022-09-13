// // 1) João, homem de bem, comprou um microcomputador para controlar o rendimento diário
// de seu trabalho. Toda vez que ele traz um peso de tomate maior que o estabelecido pelo
// regulamento do estado de São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo
// excedente. João precisa que você faça um sistema que leia a variável P (peso de tomates) e
// verifique se há excesso. Se houver, gravar na variável E (Excesso) e na variável M o valor
// da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo
// ZERO.

// let peso, exc, multa;
// peso  = prompt("Digite o peso dos tomates: ");

// if(peso > 50 ){
//     exc = peso - 50
//     multa = exc * 4
//     alert("João pagara R$: " + multa.toFixed(2) + " de multa")
// }else{
//     alert("Não precisa pagar multa");
// }

// 2) Elabore um sistema que leia as variáveis C e N, respectivamente código e número de
// horas trabalhadas de um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00
// por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento
// armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de
// trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário
// excedente.

// let cod, numH, sal, exc = 0.0, salExc = 0.0;
// cod = prompt("Qual é o codigo do trabalhador?");
// numH = prompt("Digite as horas trabalhadas:");
// sal = numH * 10;
// if(numH > 50){
//     exc = numH - 50
//     salExc = sal + (exc * 20);
//     alert("Seu salario é R$ " + sal);
//     alert("Seu salario excedente é R$" + salExc);
// }

// 3) Desenvolva um sistema em que:
// Leia 4 (quatro) números;
// Calcule o quadrado de cada um;
// Se o valor resultante do quadrado do terceiro for &gt;= 1000, imprima-o e finalize;
// Caso contrário, imprima os valores lidos e seus respectivos quadrados.

// let num1, num2, num3, num4, quad1, quad2, quad3, quad4
// num1 = prompt("Digite o primeiro numero: ");
// num2 = prompt("Digite o segundo numero: ");
// num3 = prompt("Digite o terceiro numero: ");
// num4 = prompt("Digite o quarto numero: ");

// quad1  = num1 * num1
// quad2  = num2 * num2
// quad3  = num3 * num3
// quad4  = num4 * num4

// if(quad3 >= 1000){
//     alert("\nO quadrado do terceiro numero é: " + quad3);
// }else{
//     alert("O primeiro numero é: " + num1 + "E seu quadrado é: " + quad1);
//     alert("O segundo numero é: " + num2 + " E seu quadrado é: " + quad2);
//     alert("O terceiro numero é: " + num3 + " E seu quadrado é: " + quad3);
//     alert("O quarto numero é: " + num4 + "E seu quadrado é: " + quad4);
// }

// 4) Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este
// número é par ou ímpar, e se é positivo ou negativo.

// let num;
// num = prompt("Digite um numero: ");
// if(num % 2 == 0 && num > 0 ){
//     alert("Este numero é par e positivo");
// }else if(num % 2 != 0 && num < 0 ){
//     alert("Este numero é impar e negativo")
// }else if(num % 2 == 0 && num >= 0 ){
//     alert("Este numero é par e negativo");
// }else if(num % 2 != 0 && num >= 0){
//     alert("Este numero é impar e positivo");
// }

// if(num % 2 == 0){
//     alert("O numero digitado é par");
// }else{
//     alert("O numero digitado é impar");
// }
// if(num < 0 ){
//     alert("O Numero digitado é negativo")
// }else{
//     alert("Numero digitado posito")
// }

// 5) A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
// indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
// varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
// suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são
// intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser
// notificados a paralisarem suas atividades. Faça um sistema que leia o índice de poluição
// medido e emita a notificação adequada aos diferentes grupos de empresas.

// let ind
// ind = prompt("Digite o indice da poluição medido: ");
// if(ind < 0.3){
//     alert("O indice é aceitavel");
// }else if(ind < 0.4){
//     alert("1° Grupo notificado, encerrar atividades");
// }else if(ind < 0.5){
//     alert("o 1° e o 2° grupo, suspendem atividades");
// }else{
//     alert("Todos os grupos, suspendam as atividade ");
// }

// 6) Elabore um sistema que dada a idade de um nadador classifique-o em uma das seguintes
// categorias:
// Infantil A = 5 a 7 anos
// Infantil B = 8 a 11 anos
// Juvenil A = 12 a 13 anos
// Juvenil B = 14 a 17 anos
// Adultos = Maiores de 18 anos

// let idade
//     idade = prompt("Digite a idade do nadador: ");
//     if(idade < 5){
//         alert("Idade Invalida ");
//     }else if(idade <=7){
//         alert("Infatil A")
//     }else if(idade <= 11){
//         alert("infantil B")
//     }else if(idade <= 13){
//         alert("Juvenil A")
//     }else if(idade <= 17){
//         alert("Juvenil B")
//     }else{
//         alert("Adulto")
//     }

// 7) Receber valores de base e altura de um triângulo e verificar se são valores válidos
// (positivos maiores que zero). Em caso afirmativo, calcular a área do triângulo.

// let idade
//     idade = prompt("Digite a idade do nadador: ");
//     if(idade < 5){
//         alert("Idade Invalida ");
//     }else if(idade <=7){
//         alert("Infatil A")
//     }else if(idade <= 11){
//         alert("infantil B")
//     }else if(idade <= 13){
//         alert("Juvenil A")
//     }else if(idade <= 17){
//         alert("Juvenil B")
//     }else{
//         alert("Adulto")
//     }

// 8) Construa um sistema para ler uma variável numérica N e imprimi-la somente se a mesma
// for maior que 100, caso contrário imprimi-la com o valor zero.

// let num
// num = prompt("Só diremos o valor se for maior que 100");
// if(num <= 100){
//     num = 0
// }else{
//     alert("Seu numero foi " + num);
// }

