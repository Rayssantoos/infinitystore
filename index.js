const cRegressiva = setInterval(regressiva, 1000);

function regressiva () {
    let dia = new Date();
    let hora = 23-dia.getHours();
    let minutos = 20-dia.getMinutes();
    let segundos = 19-dia.getSeconds();

    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;

    
    document.getElementById('contagem').innerHTML = hora + ':' + minutos + ':' + segundos;
    document.getElementById('contagem').style.textAlign = 'center';
    document.getElementById('contagem2').innerHTML = 'As ofertas exclusivas terminam em: ' + hora + ':' + minutos + ':' + segundos;
    document.getElementById('contagem2').style.textAlign = 'center';
    document.getElementById('contagem2').style.backgroundColor = 'red';
    document.getElementById('contagem2').style.color = 'white'; 

    
}

function parar(){
    clearInterval(cRegressiva);
}

regressiva();
