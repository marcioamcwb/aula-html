// aula de lógica 06/05/2021

// MANUAL
// https://github.com/trekhleb/javascript-algorithms/blob/master/README.pt-BR.md

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);

// var inicial = 0;
// var final = 5;

function imprimir() {
    var inicial = prompt("Digite o número inicial");
    var final = prompt("Digite o número final");

    inicial = parseInt(inicial);
    final = parseInt(final);

    while (inicial <= final) {
        console.log(inicial);
        // inicial = inicial + 1;
        inicial++;
    }
}


function reverso() {

    var inicial = prompt("Digite o número inicial");
    var final = prompt("Digite o número final");

    inicial = parseInt(inicial);
    final = parseInt(final);

    while (final >= inicial) {
        console.log(final);
        final--;
    }

}

function imprimirFor() {
    for (var inicial = 0; inicial <= 5; inicial = inicial + 1) {
        console.log(inicial);
    }

}

https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/factorial/factorialRecursive.js

function fatorial() {
    var num = prompt("Digite nº fatorial");  // 4
    num = parseInt(num);

    var cont = 1;
    var resultado = 1;

    {
        while (cont <= num) {
            resultado = resultado * cont;
            cont++
        }

        console.log(resultado);
    }

}

// https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/factorial/factorial.js
/**
 * @param {number} number
 * @return {number}
 */

// export default function factorial(number) {

function factorialNORMAL() // MAM

{
    var number = prompt("Digite nº fatorial");  // MAM

    let result = 1;  // var result = 1;

    for (let i = 2; i <= number; i += 1) //  FOR I = 2 TO NUMBER
    {
        result *= i;  // result = result * i;
    }

    console.log("FATORIAL NORMAL = " + result);

    // return result;
}

// https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/factorial/factorialRecursive.js
/**
* @param {number} number
* @return {number}
*/

// "?" é uma forma diferente de escrever "IF"
export default function factorialRecursive(number) {
    return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

// LIVRO PARA BACK-END (eBook)
// https://github.com/braziljs/eloquente-javascript
