login = document.getElementById('entrar')
user = document.getElementById('usuario')
pass = document.getElementById('senha')

login.addEventListener('click', function(){
    if (user.value == 'josi' & pass.value == '1' || user.value == 'diego' & pass.value =='2'){
        window.location.assign('index.html')
    }

    else{
        alert('Usuário ou Senha incorreta')
    }
})