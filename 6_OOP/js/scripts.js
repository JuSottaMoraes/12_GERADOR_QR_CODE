//  1 - métodos
const animal = {
    nome: "BoB",
    latir: function() {
        console.log("Au au")
    }
};

console.log(animal.nome);
// executou o método dentro do objeto
animal.latir();

// 2 - Aprofundando em métodos
const pessoa = {
    nome: "Matheus",

    getNome: function () {
        return this.nome;
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Joaquim");

console.log(pessoa.getNome());

// 3 - Prototype - herança
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

// 4 - mais sobre prototype -   é uma cadeia não muito utilizado
const myObject = {
     a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf (myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes básicas
const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - funções como classes - função construtora
function criarCachorro(nome, raca) {

    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}
 
const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const jack =  criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7- Funções construtoras -palavra chave new e nome da função em maiúsculo
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 -  métodos na função construtora
Cachorro.prototype.uivar = function () {
    console.log("Auuuuu!");
};

console.log(Cachorro.prototype);

husky.uivar();

// 9 - classes em JavaScript - es6 versões mais novas - uso de constructor
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff  = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`este caminhão tem ${this.eixos} eixos e é de cor ${this.cor}`);
    }
}

const scania = new Caminhao(6,"Vermelha");

console.log(scania);

scania.descreverCaminhao();

// 11- Override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }
}

const matheus = new Humano("Matheus", 31);

console.log(matheus);

Humano.prototype.idade = "não definida";

console.log(matheus.idade);

console.log(Humano.prototype.idade);

// 12 - Symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;

    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// 13- getter exibe valor e setter altera valor
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }
    get exibirTitulo() {
        return `você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(" , ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programacao, javascript, js";

console.log(myPost);

// 14 - Herança usa a palavra extends e super da classe pai
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);

// 15 - instanceof - verifica a ancestralidade
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste")instanceof Mamifero);

console.log(new Post("a", "b")instanceof Lobo);