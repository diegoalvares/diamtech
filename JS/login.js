login = document.getElementById('entrar')
user = document.getElementById('usuario')
pass = document.getElementById('senha')

login.addEventListener('click', function(){
    if (user.value.toUpperCase() == 'JOSI' & pass.value == '1' || user.value.toUpperCase() == 'DIEGO' & pass.value =='05101994'){
        window.location.assign('index.html')
    }

    else{
        alert('Usuário ou Senha incorreta')
        
    }
})