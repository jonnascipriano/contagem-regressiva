function contagemRegressiva(){
    // Retorna em milésimos a data escolhida pelo usuário
    var dataEsc = document.getElementById('dataEsc').value
    var dataFinal = new Date(dataEsc).getTime()

    // Retorna em milésimos a data atual
    var agora = new Date().getTime()

    // Diferença entre a data escolhida e a data atual.
    var diferenca = dataFinal - agora
    
    // Calcula os milésimos até chegar ao número correspondente ao dia/hora/minuto/segundo
    // Math.floor serve para arredondar um número fracionado.
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    var horas = Math.floor((diferenca % (1000*60*60*24)) / (1000*60*60))
    var minutos = Math.floor((diferenca %(1000*60*60))/(1000*60));
    var segundos = Math.floor((diferenca % (1000*60))/1000)

    // Escreve em tela o retorno do calculo da contagem.
    document.getElementById('dias').innerText = `${dias}d`
    document.getElementById('hor').innerText = `${horas}h`
    document.getElementById('min').innerText = `${minutos}m`
    document.getElementById('seg').innerText = `${segundos}s`
    
    // Executa ao termino da contagem.
    if(diferenca < 0){
        clearInterval(intervalo)
        document.getElementById('res').innerText = 'A contagem terminou'
        document.getElementById('ul').style.display = 'none'
        document.getElementById('reload').style.display = 'flex'
        document.getElementById('container').style.display = 'none'
    }


    // Atualiza a contagem a cada 1000 milésimos (1 segundo)
    var intervalo = setInterval(contagemRegressiva, 1000)
}

// Botão de recarregar a página
document.getElementById('reload').onclick = () => window.location.reload()