function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var fundo = window.document.getElementById('fundao')
    var data = new Date()
    var hora = data.getHours()

    if(hora >= 6 && hora < 12){
        img.src = 'manhaeditado.webp'
        fundo.style.background = '#fcdbac'
        msg.innerHTML = `Agora são ${hora} horas <br> Bom dia` 

    }else if(hora >= 12 && hora < 18){
        img.src = 'tardeeditado.webp'
        fundo.style.background = '#e18621'
        msg.innerHTML = `Agora são ${hora} horas <br> Boa tarde` 

    }else {
        img.src = 'noiteeditado.webp'
        fundo.style.background = '#543d5d'
        msg.innerHTML = `Agora são ${hora} horas <br> Boa noite`

    }
    
}