// 1 -

// let peso, exc, multa = 0.0
// peso = prompt("Digite o peso dos tomates: ");

// if(peso > 50){
//     exc = peso - 50
//     multa = exc * 4
//     alert("João pagara R$" + multa.toFixed(2) + " de multa");
// }else{
//     alert("Não precisa pagar multa");
// }

// 2 - 

// let cod, numH, sal, exc = 0.0, salExc = 0.0 
// cod = prompt("Qual é o codigo do trabalhador?");
// numH = prompt("Digite as horas trabalhadas: ");
// sal = numH * 10;
// if(numH > 50){
//     exc = numH - 50
//     salExc = sal + (exc * 20);
//     alert("Seu salario é R$" + sal);
//     alert("Seu Salario excedente é R$" + salExc);
// }

//3 - 
// let num1, num2, num3, num4, quad1, quad2, quad3, quad4

// num1 = prompt("Digite o numero 1: ")
// num2 = prompt("Digite o numero 2: ")
// num3 = prompt("Digite o numero 3: ")
// num4 = prompt("Digite o numero 4: ")

// quad1 = num1 * num1
// quad2 = num2 * num2
// quad3 = num3 * num3
// quad4 = num4 * num4

// if(quad3 >= 1000){
//     alert("\nO Quadrado do terceiro numero é" + quad3)
// }else{
//     alert("\nO Primeiro numero é " + num1 +" E seu quadrado é" + quad1);
//     alert("\nO Segundo numero é " + num2 +" E seu quadrado é" + quad2);
//     alert("\nO Terceiro numero é " + num3 +" E seu quadrado é" + quad3);
//     alert("\nO Quarto numero é " + num4 +" E seu quadrado é" + quad4);
// }

// 4 - 
    // let num
    // num = prompt("Digite seu numero");
    // if(num % 2 == 0){
    //     alert("\nO Numero digitado é par");
    // }else{
    //     alert("O numero digitado é impar");
    // }
    // if(num < 0 ){
    //     alert("\nNumero digitado é negativo");
    // }else{
    //     alert("\nNumero digitado positivo");
    // }


// 5 - 
// let ind
// ind = prompt("Digite o indice de poluição medido: ")
// if(ind < 0.3){
//     alert("O indice ")
// }


// 6 - 
    // let idade
    // idade = prompt("Digite a idade do nadador: ");
    // if(idade < 5){
    //     alert("Idade Invalida ");
    // }else if(idade <=7){
    //     alert("Infatil A")
    // }else if(idade <= 11){
    //     alert("infantil B")
    // }else if(idade <= 13){
    //     alert("Juvenil A")
    // }else if(idade <= 17){
    //     alert("Juvenil B")
    // }else{
    //     alert("Adulto")
    // }

    // 7 - 

    // let b, a, area;
    // b = prompt("Digite o valor da base"); 
    // a = prompt("Digite o Valor da altura");
    // if (b > 0 && a > 0){
    //     area = (parseFloat(b) * parseFloat(a)) / 2 
    //     alert("A área do triangulo é " + area)
    // }else{
    //     alert("Valores inválidos")
    // }


    // 8 -
    // let num
    // alert("Só diremos o valor se for maior que 100")
    // num = prompt("Digite um valor: ");
    // if(num <= 100){
    //     num = 0.0
    // }else{
    //     alert("Seu numero foi: " + num)
    // }


    // 1 
    let filhos, sal100 = 0, salario, soma = 0, mediaSal = 0.0, mediaF = 0, mSal = 0.0, perc

    for(i = 0; i <= 1; i++){
        salario = prompt("Digite o salário");
        filhos = prompt("Digite o número de filhos: ")
        

        soma = parseFloat(soma) + parseFloat(salario)
        mediaF = parseInt(mediaF) + parseInt(filhos)

        if(mSal < salario){
            mSal = parseFloat(salario)
        }

        if(salario <= 100){
            parseFloat(sal100++)
        }
    }

    mediaSal = soma / 20
    mediaF = parseInt(mediaF) / 20

    perc = (parseFloat(sal100) / 20) * 100.00
    alert("A média do salário da população é: " + mediaSal + "\nA média de filhos da população é: " + mediaF + "\nO maior salário foi: " + mSal + "\nO percentual de pessoas com salário até R$ 100 é: " + perc + "%")