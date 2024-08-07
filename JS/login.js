login = document.getElementById('entrar')
user = document.getElementById('usuario')
pass = document.getElementById('senha')

login.addEventListener('click', function(){
    if (user.value.toUpperCase() == 'JOSIFONO' & pass.value == 'josid2024' || user.value.toUpperCase() == 'DIEGO' & pass.value =='05101994'){
        window.location.assign('sala.html')
    }

    else{
        alert('Usuário ou Senha incorreta')
        
    }
})