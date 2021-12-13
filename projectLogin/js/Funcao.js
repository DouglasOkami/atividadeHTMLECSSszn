//let's
let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false;

let labelSenha = document.querySelector("#labelSenha");
let inputSenhaCadastro = document.querySelector("#senhaCadastro");
let validSenha = false;

let labelconfirmSenha = document.querySelector("#labelconfirmSenha");
let inputSenhaConfirma = document.querySelector("#confirmSenha");
let validSenhaConfirma = false;

let inputSenhaLogin = document.querySelector("#senhaLogin");
//falta o label do login
let validSenhaLogin = false;

//validações

//nome
nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style','color: red');
        nome.setAttribute('style','border-color: red');
        labelNome.innerHTML = 'Nome *Insira no minímo 3 caracteres';
        validNome = false;
    }else{
        labelNome.setAttribute('style', 'color: green');
        nome.setAttribute('style', 'border-color: green');
        labelNome.innerHTML = 'Nome';
        validNome = true;
    }
});
//Usuario
usuario.addEventListener('keyup', () =>{
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style','color: red');
        usuario.setAttribute('style','border-color: red');
        labelUsuario.innerHTML = 'Usuario *Insira no minímo 3 caracteres';
        validUsuario = false;
    }else{
        labelUsuario.setAttribute('style', 'color: green');
        usuario.setAttribute('style', 'border-color: green');
        labelUsuario.innerHTML = 'Usuario';
        validUsuario = true;
    }
});
//Senha Cadastro
inputSenhaCadastro.addEventListener('keyup', () =>{
    if(inputSenhaCadastro.value.length < 6){
        labelSenha.setAttribute('style','color: red');
        inputSenhaCadastro.setAttribute('style','border-color: red');
        labelSenha.innerHTML = 'Senha *Insira no minímo 6 caracteres';
        validSenha = false;
    }else{
        labelSenha.setAttribute('style', 'color: green');
        inputSenhaCadastro.setAttribute('style', 'border-color: green');
        labelSenha.innerHTML = 'Senha';
        validSenha = true;
    }
});

//Senha Confirma
inputSenhaConfirma.addEventListener('keyup', () =>{
    if(inputSenhaCadastro.value != inputSenhaConfirma.value){
        labelconfirmSenha.setAttribute('style','color: red');
        inputSenhaConfirma.setAttribute('style','border-color: red');
        labelconfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
        validSenhaConfirma = false;
    }else{
        labelconfirmSenha.setAttribute('style', 'color: green');
        inputSenhaConfirma.setAttribute('style', 'border-color: green');
        labelconfirmSenha.innerHTML = 'Confirmar Senha';
        validSenhaConfirma = true;
    }
});


//página olhinho Login
let btn = document.querySelector(".fa-eye");
btn.addEventListener('click', ()=>{
    let inputSenha1 = document.querySelector("#senhaLogin");
    if(inputSenha1.getAttribute('type') == 'password'){
        inputSenha1.setAttribute('type', 'text');
    }else{
        inputSenha1.setAttribute('type', 'password');
    }
});


//página olhinho Cadastrar
let btn2 = document.querySelector("#verSenha");
btn2.addEventListener('click', ()=>{
    let inputSenha2 = document.querySelector("#senhaCadastro");
    if(inputSenha2.getAttribute('type') == 'password'){
        inputSenha2.setAttribute('type', 'text');
    }else{
        inputSenha2.setAttribute('type', 'password');
    }
});

let btn3 = document.querySelector("#verConfirmaS");
btn3.addEventListener('click', ()=>{
    let inputSenha3 = document.querySelector("#confirmSenha");
    if(inputSenha3.getAttribute('type') == 'password'){
        inputSenha3.setAttribute('type', 'text');
    }else{
        inputSenha3.setAttribute('type', 'password');
    }
});

//Funções Top :)
function cadastrar(){
    if(validNome && validUsuario && validSenha && validSenhaConfirma){
        alert("Deu bom")
    }else{
        alert("Os requerimentos não foram atendidos")
    }
}