// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
});

// 2 - removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirBtn = document.querySelector("#other-btn");

thirBtn.addEventListener("click", () => {
    console.log("Evento Removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - Argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// 4- propagação 
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", ()=> {
    console.log("Evento1");
});


btnInsideContainer.addEventListener("click", (e)=> {
    e.stopPropagation();
    console.log("Evento2");
});

// 5- Removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página");
});

// 6 - eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.Key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.Key}`);
});

// 7 - eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown",() => {
    console.log("Pressionou o botão");
});

mouseEvents.addEventListener("mouseup",() => {
    console.log("Soltou o botão");
});

mouseEvents.addEventListener("dblclick",() => {
    console.log("Clique duplo");
});

// 8 - movimento do mouse - muito poderoso fica disparando os números
 document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo x: ${e.x}`);
//     console.log(`No eixo y: ${e.y}`);
 });

// 9 - evento de scroll - tradução rolagem
// faz no window  - janela ou tela não no document
window.addEventListener("scroll", (e) => {
    if(window.scrollY > 200) {
        console.log("passamos de 200px");
    }
});

// 10 - evento de focus/blur
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("Saiu no input");
});

// 11 - Eventos de carregamento de página
window.addEventListener("load" , () => {
    console.log("A página carregou!");
});

// abaixo evento não muito utilizado
window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "teste";
});

// 12 - debounce - dispara o evento menos vezes
const debounce = (f, delay) => {
    let timeout;

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout);
        }
        // abaixo precisa de f.apply = função aplicar
        timeout = setTimeout(() => {
            f.aplly(arguments);
        }, delay);
    };
};

window.addEventListener("mousemove" , debounce(() => {
    console.log("Executando a cada 400 ms");
}, 400)
);