
function contagemRegressiva(){

    const dataEsc = document.getElementById('dataEsc').value
    const dataFinal = new Date(dataEsc).getTime()
    const agora = new Date().getTime()
    const diferenca = dataFinal - agora

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    const horas = Math.floor((diferenca % (1000*60*60*24)) / (1000*60*60))
    const minutos = Math.floor((diferenca %(1000*60*60))/(1000*60));
    const segundos = Math.floor((diferenca % (1000*60))/1000)

    document.getElementById('dias').innerText = `${dias}d`
    document.getElementById('hor').innerText = `${horas}h`
    document.getElementById('min').innerText = `${minutos}m`
    document.getElementById('seg').innerText = `${segundos}s`
    
    if(diferenca < 0){
        clearInterval(intervalo)
        document.getElementById('res').innerText = 'A contagem terminou'
        document.getElementById('ul').style.display = 'none'
    }

    console.log(diferenca)
}

const intervalo = setInterval(contagemRegressiva, 1000)
