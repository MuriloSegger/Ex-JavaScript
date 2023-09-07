function carregar(){
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    //verifica a hora atual 
    var img = document.getElementById('img')
    var res = document.getElementById('res')
    var txt = document.getElementById('text')
    res.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12 ){
        //boa dia
        document.body.style.backgroundColor = '#7b092a'
        img.src = './img/dia.png'
        text.innerHTML = 'Bom dia <3'
    } else if( hora >= 12 && hora < 18 ){
        //bom tarde
        document.body.style.backgroundColor = '#146797'
        img.src = './img/tarde.png'
        text.innerHTML = 'Boa tarde <3'
    } else if(hora <= 23){
        //bom noite
        document.body.style.backgroundColor = '#1a1927'
        text.innerHTML = 'Boa noite <3'
        img.src = './img/noite.png'
    } else {
        alert('[ERRO] Hora inválida')
    }
}