// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === ""){
        alert("Por favor, inserte un Nombre");
        return;
    }

    amigos.push(nombreAmigo);

    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
}

function actualizarLista(){
    const listaAmigoUl = document.getElementById("listaAmigos")
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}
