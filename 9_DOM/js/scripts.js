//  1 - movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando elemento por id
const title = document.getElementById("title");

console.log(title);

// 4 - Selecionando elementos por classe
const products = document.getElementsByClassName("product");

console.log(products);

//  5 - selecionando os elementos por css
const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

// colocou # abaixo porque é um Id

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore traduzindo Inserir antes
const p = document.createElement("p");

// console.log(p);

const header  = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild - tradução anexar filho - significa que é possível 
// adicionar um elemento dentro do outro
const navLinks  = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 -  método replaceChild --tradução substituir filho -- significa  trocar um elemento
const h2 = document.createElement("h2");

h2.textContent = "Meu novo título";
// textContent principal opção

header.replaceChild(h2, title);

// 9 - createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um título");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

//  10 - trabalhando co atributos
// firstLink seleciona o primeiro elemento
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

// ao utilizar como abaixo abre-se uma nova aba
firstLink.setAttribute("target","_blank");

// 11 - altura e largura dos elementos
const footer = document.querySelector("footer");

// offsetWidth tradução = largura de deslocamento
console.log(footer.offsetWidth);
// offsetHeight tradução = altura de deslocamento
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - posição do elemento da tela
const product1 = products[0];
// usando um delimitador abaixo
console.log(product1.getBoundingClientRect());

// 13 - style - CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// 14 - alterando estilos de vários elementos  - HTMLCollection
for(const li of listItens) {
    li.style.backgroundColor = "red";
}