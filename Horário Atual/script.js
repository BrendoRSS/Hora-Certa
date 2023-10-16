function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()



msg.innerHTML = `Agora são ${hora} Horas`
if (hora >= 6 && hora < 12) {
    // bom dia
    var color1 = document.getElementById ('txth1')
    var foolderx = document.getElementById('txtp')
    foolderx.style.color ='black'
    color1.style.color = 'black'
    txth1.innerHTML = `Bom dia!! :)`
    img.src = 'manhasemfundo.png'
} else if (hora>=12 && hora <= 18) {
    //boa tarde
    txth1.innerHTML = `Boa tarde!! :)`
    img.src = 'tardesemfundo.png'
    document.body.style.background = '#FC7F01'
} else  {
    //boa noite
    txth1.innerHTML = `Boa noite!! :)`
    img.src = 'noitesemfundo.png'
    document.body.style.background = '#773520'
    }
   
} 
