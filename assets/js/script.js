let email = document.getElementById('email')
let artista = document.getElementById('artista')
let musica = document.getElementById('musica')
let motivo = document.getElementById('motivo')

let emailOk = false
let artistaOk = false
let musicaOk = false
let motivoOk = false

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        email.style.border = '2px solid red'
        txtEmail.style.color = 'red'      
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        email.style.border = '2px solid green'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaArtista(){
    let txtArtista = document.querySelector('#txtArtista')
    if(artista.value.length < 1){
        txtArtista.innerHTML = 'Informe um nome'
        artista.style.border = '2px solid red'
        txtArtista.style.color = 'red'
    }else{
        artista.style.border = '2px solid green'
        txtArtista.innerHTML = 'Ok!'
        txtArtista.style.color = 'green'
        artistaOk = true
    }
}

function validaMusica(){
    let txtMusica = document.querySelector('#txtMusica')
    if(musica.value.length < 1){
        txtMusica.innerHTML = 'Informe uma música'
        musica.style.border = '2px solid red'
        txtMusica.style.color = 'red'
    }else{
        musica.style.border = '2px solid green'
        txtMusica.innerHTML = 'Ok!'
        txtMusica.style.color = 'green'
        musicaOk = true
    }
}

function validaMotivo(){
    let txtMotivo = document.querySelector('#txtMotivo')
    if(motivo.value.length > 121){
        txtMotivo.innerHTML = 'Valor muito grande'
        motivo.style.border = '2px solid red'
        txtMotivo.style.color = 'red'
    }else{
        motivo.style.border = '2px solid green'
        txtMotivo.innerHTML = 'Ok!'
        txtMotivo.style.color = 'green'
        motivoOk = true
    }
}

function enviarForm(){
    if(emailOk == true && artistaOk == true 
        && musicaOk == true && motivoOk == true){
            alert('Formulário enviado com sucesso')
            location.reload();
            return false;
        }else{
            alert('Preencha o formulário corretamente antes de clickar em enviar')
        }

}
