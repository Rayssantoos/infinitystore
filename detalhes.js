function enviar() {
    const url = "https://62d0e2051cc14f8c088fc83d.mockapi.io/produto/23";

    fetch(url)
    .then((response => response.json()))
    .then(detalhes);
}

function detalhes(produto){
    let nome = document.getElementsByClassName("nome")[0];
    nome.innerHTML = produto.titulo;
    let mais = document.getElementById("mais");
    mais.innerHTML = produto.descricao;
    let imagem = document.getElementById("zoom");
    imagem.setAttribute ("src", produto.imagem);

}


