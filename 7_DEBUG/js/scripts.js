// 1 - strict - restrito em comentário o que não é pra fazer
"use strict";

// opa = "teste";

const opa = "teste";

// const undefined = 10;

// delete [].length;

// 2- console log
let a = 1;
let b = 2

if (a == 1) {
    a = b + 2
}

console.log(a);

for (let i = 0; i < b; i++) {
    a = a + 2
    console.log(a);
}

if (a > 5) {
    a = 25;
}

console.log(a);

//  3 - Debugger
let c = 1;
let d = 2;

if (c == 1) {
    c = d + 2;
}

// debugger;

for (let i = 0; i < d; i++) {
    c = c + 2;
}

console.log("executou o loop");

// debugger;

if (c > 5) {
    c = 25;
}

//  4 - tratamento de dados
function checknumber(n) {
    const result = Number(n);

    if (Number.isNaN(result)) {
        console.log("Valor incorreto!");
        return;
    }

    console.log("Valor correto!");
    return result;
}

checknumber(5);
checknumber("10");
checknumber({});
checknumber("teste");

//  5 - Exceptions
let x = 10;

if (x != 11) {
    // throw new Error("O valor de x não pode ser diferente de 11!");
}

//  6 - try catch
try {
    const soma = x + y;
} catch (error) {
    console.log(`Erro no programa: ${error}`);
}

//  7 - finally - bloco que vai depois do catch
try {
    const value = checknumber("1");

    if (!value) {
        throw new Error("Valores inválidos");
    }
} catch (error) {
    console. log(`Opa aconteceu algum problema: ${error}`);
} finally {
    console.log("O código foi executado!");
}

// 8 - assertions - verificação
function checkArray(arr) {
    if(arr.length === 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        console.log(`O array tem ${arr.length} elementos`);
    }
}
 // checkArray([]);

 checkArray([1, 2, 3]);
   