let amigos = []

function adicionarAmigo() {
    const nome = document.querySelector('#amigo');
    if (nome.value.trim() == '') {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nome.value);
    nome.value = "";
    atualizarAmigos();
}


function atualizarAmigos() {
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        const novoElemento = document.createElement('li');
        novoElemento.textContent = amigos[i];
        lista.appendChild(novoElemento);
    }

}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Não há amigos para sortear. Adicione amigos à lista");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;


}
