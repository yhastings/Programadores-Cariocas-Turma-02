// for   // para
// while  // enquanto
// do-while //faça enquanto 


// for(inicialização; condição; incremento/decremento){
// bloco ação
// }
// alert("Sua bomba vai explodir em: ");
// for(i = 0; i < 10; i++){
//     alert(i);
// }
// alert("Explodiu!!!!");

// let abacaxi = 0; // inicialização
// while(abacaxi < 5){ //condição
//     for(i = 0; i < 4; i++){
//         alert(i);
//     }
//     abacaxi++
//     alert("Sou While");

// alert(abacaxi)
// }


//inicialização
//condição
//incremento

//     let n = 0; //inicialização
//   while(n < x){ //condição 
//         alert(n)
//         n + 1 //incremento 
//   } 

// let i = 0;
// do{
//     alert(i);
//     i++;
// }while(i < 5);





// Exercício 2 - Para0

// let numI = 0.0

// for(i = 1; i <= 500; i++){

// 	if(i % 2 != 0 && i % 3 == 0){
//     alert(numI)
// 		numI += i
// 	}

// }

// alert("A soma de todos os números ímpares e divisíveis por 3" + 
// ", de 1 a 500 é " + numI)

//   let num=0.0, soma=0.0, media, total=0.0;

// 	while(num >= 0){

// 		num = prompt("Digite um número: ");

// 		if(num >= 0){

// 			soma = parseInt(soma) + parseInt(num)
//       alert(soma)
// 			total++
// 		}

// 	}

// 	media = soma / total;

// alert("\nSoma de todos os números digitados: " + soma);
// alert("\nMédia de todos os números digitados: " + media);
// alert("\nTotal de números digitados: " + total);


// let num = 0, mult=0.0;
// 	num = prompt("Digite um número: ");

// while(num <= 100){
// 	num = num * 3
// 	alert(num);
// }

// let cont = 233

// do {
//   if (cont >= 300 && cont <= 400) {
//     cont += 3
//   } else {
//     cont += 5
//   }

//   alert("\n" + cont);

// } while (cont <= 456)



// let num = 0, resultado = 0;

// num = prompt("Digite um número: ");

// do {

//   resultado = parseInt(resultado) + parseInt(num)
//   num--

// } while (num >= 0)

// alert(resultado)


// let opcao = 0;

// do {
//     opcao = MostrarMenu();
// }  while (opcao != 2);

// function MostrarMenu(params) {
//     entrada= "";
//     alert("==-MostrarMenu-==" + "\n1 - Mostrar de novo" + "\n2  - Sair");
//     return entrada = prompt();
// }

// Crie uma um programa de saúde, nesse programa desenvolva uma função que calcula o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.
// let kilos = 0.0, altura = 0.0, imc;

// kilos = prompt("Qual o seu peso?")
// altura = prompt("Qual o sua altura?")
// calImc(kilos, altura);
// function calImc(kilos, altura) {
//   imc = kilos / (altura * altura);
//   return alert("Seu imc é: " + imc.toFixed(2));
// }
