//  1- arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12, []];

console.log(itens);

// 2- mais sobre os arrays
const arr = ["a", "b", "c", "d", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[83]);

// 3 - Propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.length);

//  4 - métodos
const otherNumbers =[1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto ";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5- objetos
const person ={
    name: "Matheus",
    age: 31,
    job: "Programador"
}

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

//  6 - criando e deletando propriedades
const car = {
    engine:2.0,
    brand:"vw",
    model:"Tiguan",
    km :20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c:[],
};

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - mutação -- mutability cuidado com o uso
const a = {
    name: "Matheus",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);


delete b.age;

console.log(a);
console.log(b);


//  10 - loop em array
const users = ["Matheus", "João", "Pedro", "Miguel"];

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuários: ${users[i]}`);
}

// 11 - push  e pop (adiciona e remove o elemento no fim do array)
const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

// 12 - shift e unshift (remove e adiciona no início do array )
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

//  13 - IndexOf e lastIndexOf econtra o índice de elemento
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Mamão"));

console.log(myElements.lastIndexOf("Mamão"));

// 14 - slice- ultimo elemento é ignorado somar mais 1 para corrigir
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

//  15 - forEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);

});

const posts = [
    {title: "Primeiro post",category: "PHP"},
    {title: "Segundo post",category: "JavaScript"},
    {title: "Terceiro post",category: "Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);

});

// 16 - includes

const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("KIA"));

if(brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
};

//  17- Reverse --cuidado ele modifica o array original
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

//  18 - trim - remove o que não é um texto numa string
const trimTest = "    testando \n    ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// 19 - padStart - é o método que insere texto no começo da string.Usado para padronização
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testPadEnd = newNumber.padEnd(10, "0");

console.log(testPadEnd);

//  20 - Split -- divide string em array
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - join une array em uma string
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDaCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(fraseDaCompra);

// 22 - repeat
const palavra = "Testando ";

console.log(palavra.repeat(5));

// 23 - rest operator / Rest paramenters caracterizado por 3 pontinhos ...

const somaInfinita = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 20, 34, 3424, 128812, 12723, 12, 23, 54, 12));

// 24 -  estrutura for of sintaxe mais simples
const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }
    return total;
};

console.log(somaInfinita2(1, 2, 4));

console.log(somaInfinita2(5, 6, 1, 23, 5, 6, 3, 5));

// 25- destructuring em objetos -- desestruturar algum dado
const userDetails = {
    firstName: "Matheus",
    lastName:"Batistti",
    job:"Programador"
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// renomear variáveis
const { firstName: primeiroNome } = userDetails;

console.log(firstName);

// 26 - destructuring em arrays-- desestruturar um array em Variáveis
const myList = ["Avião", "Submarino", "Carro"];

const [veículoA, veículoB, veículoC] = myList;

console.log(veículoA, veículoB, veículoC);

// 27 - JSON - receber da api
const myJson =
 '{"name": "Matheus", "age": 31, "skills": ["PHP", "Javascript", "Python"]}';

 console.log(myJson);

 console.log(typeof myJson);

//  28  - JSON para objeto e objeto para JSON

const myObject =JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

// json inválido
const badJason = '{"name": Matheus, "age": 31}';

// const myBadObject = JSON.parse(badJson);

myObject.isOpenTowork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);

