//let's
let btnConfirm = document.querySelector('#verConfirmSenha');
let btnSenha = document.querySelector('#verSenha');


let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');


let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');


let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');


let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color:red');
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
    }else{
        labelNome.setAttribute('style', 'color:green');
        labelNome.innerHTML = 'Nome'
    }
});

//Função Cadastrar
function cadastrar(){
    
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