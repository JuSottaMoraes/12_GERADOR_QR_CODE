// 1- setTimeout - quanto tempo depois
console.log("Ainda não executou");

setTimeout(function() {
    console.log("Requsisão assíncrona");
}, 2000);

console.log("Ainda não executou 2");

// 2 - setInterval
console.log("Ainda não começou");

// setInterval(function() {
//     console.log("Intervalo assíncrono");
// }, 3000);

console.log("Ainda não começou 2");

// 3 - Promises - promessas
const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa.then((value) => {
    console.log(`A soma é ${value}`);
    return value;
})
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é ${value}`));

console.log("Outro código");

// 4 - falha na promise
// Promise.resolve(4 * "asd")
//  .then((n) => {
//     if (Number.isNaN(n)) {
//         throw new Error("valores inválidos");
//     }
//     })
//     .catch((err) => console.log(`Um erro ocorreu: ${err}`));

    // 5 - rejeição de promises
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O número é maior que 10`);
        } else {
            reject(new Error("Número muito baixo"));
        }
    });
}

const a = checkNumber(20);

const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreu: ${err}`)
);

// 6 - resolvendo várias promessas
const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10);
    }, 3000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject("Erro!");
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - Async Functions = conjunto de instruções-- similar aero function
async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`);
});

console.log("teste async");

//  8 -  async await - aguardando resultado
function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(( ) => {
            resolve("Resolveu a Promise");
        }, 2000);
    });
}

async function chamadasAsync() {
    console.log("Chamando a Promise, e esperando o resultado");
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadasAsync();

// 9 - Generators
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);