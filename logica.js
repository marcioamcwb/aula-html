// aula de lógica 05/05/2021

function idade() {

    var idade_p = prompt("Digite sua idade");

    if (idade_p >= 18) {
        console.log("é maior de idade");
    }
    else {
        console.log("é menor de idade");
    }

}

function maior() {

    var num1 = prompt("Digite o valor 1");
    var num2 = prompt("Digite o valor 2");

    // quando é numerico mostra em azul no console
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1 == num2) {
        console.log("Os 2 valores são iguais: " + num1 + "=" + num2);
    }
    else if (num1 > num2) {
        console.log("O valor " + num1 + " é maior que " + num2);
    }
    else {
        console.log("O valor " + num1 + " é menor que " + num2);

    }

}



function soma() {

    var num1 = prompt("Digite o valor 1");
    var num2 = prompt("Digite o valor 2");

    var resultado = 0;

    // quando é numerico mostra em azul no console
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    resultado = num1 + num2;

        console.log("Resultado = " + num1 + " + " + num2 + " = " + resultado);
}

function sub() {

    var num1 = prompt("Digite o valor 1");
    var num2 = prompt("Digite o valor 2");

    var resultado = 0;

    // quando é numerico mostra em azul no console
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    resultado = num1 - num2;

    console.log("Resultado = " + num1 + " - " + num2 + " = " + resultado);
}

function mult() {

    var num1 = prompt("Digite o valor 1");
    var num2 = prompt("Digite o valor 2");

    var resultado = 0;

    // quando é numerico mostra em azul no console
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    resultado = num1 * num2;

    console.log("Resultado = " + num1 + " * " + num2 + " = " + resultado);
}

function div() {

    var num1 = prompt("Digite o valor 1");
    var num2 = prompt("Digite o valor 2");

    var resultado = 0;

    // quando é numerico mostra em azul no console
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num2 > 0) {
        resultado = num1 / num2;
        console.log("Resultado = " + num1 + " / " + num2 + " = " + resultado);
    }
    else {
        // na divisão o valor 2 tem que ser maior que zero
        alert("Erro: Divisão por Zero. O valor 2 tem que ser maior que zero na divisão!");
        resultado = 0;
        console.log("Resultado = " + num1 + " / " + num2 + " = " + "ERRO divisão por Zero");
    }

        
}

function reverso()
{

var inicial = prompt("Digite o número inicial");
var final = prompt("Digite o número final");

inicial = parseInt(inicial);
final = parseInt(final);

while (final >= inicial)
{
    console.log(final);
       final--;
}

}
