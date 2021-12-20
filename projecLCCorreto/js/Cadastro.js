//let's
let btnConfirm = document.querySelector('#verConfirmSenha');
let btnSenha = document.querySelector('#verSenha');


let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;


let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

let msgError = document.querySelector('#msgError');
let msgSucess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style','color:red');
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres';
        nome.setAttribute('style','border-color:red');
        validNome = false;
       
    }else{
        labelNome.setAttribute('style', 'color:green');
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:green');
        validNome = true;
    }
});


usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style','color:red');
        labelUsuario.innerHTML = 'Usuario *Insira no mínimo 5 caracteres';
        usuario.setAttribute('style','border-color:red');
        validUsuario = false;
       
    }else{
        labelUsuario.setAttribute('style', 'color:green');
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color:green');
        validUsuario = true;
    }
});

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style','color:red');
        labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres';
        senha.setAttribute('style','border-color:red');
        validSenha = false;
       
    }else{
        labelSenha.setAttribute('style', 'color:green');
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:green');
        validSenha = true;
    }
});

confirmSenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style','color:red');
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
        confirmSenha.setAttribute('style','border-color:red');
        validConfirmSenha = false;
       
    }else{
        labelConfirmSenha.setAttribute('style', 'color:green');
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color:green');
        validConfirmSenha = true;
    }
});

//Função Cadastrar
function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
   
    listaUser.push({
        nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSucess.setAttribute('style', 'display:block');
     msgSucess.innerHTML = "Cadastrando usuário...";
     msgError.setAttribute('style', 'display:none');
     msgError.innerHTML = "";

    setTimeout(()=>{
        window.location.href = 'http://127.0.0.1:5500/Login.html'
    },3000);
    
    }else{
        msgError.setAttribute('style', 'display:block');
        msgError.innerHTML = "Preencha todos os campos corretamente antes de cadastrar";
        msgSucess.innerHTML = "";
        msgSucess.setAttribute('style', 'display:none');
    }
}

//Função Olhinho Senha
btnSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha');
    if(inputSenha.getAttribute('type')== 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
});
//Função Olhinho Confirma Senha
btnConfirm.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#confirmSenha');
    if(inputSenha.getAttribute('type')== 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
});