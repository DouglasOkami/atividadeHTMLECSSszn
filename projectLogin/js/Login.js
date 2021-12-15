//Dom Senha Login
let labelSenhaLogin = document.querySelector("#labelSenhaLogin");
let inputSenhaLogin = document.querySelector("#senhaLogin");
let validSenhaLogin = false;

//página olhinho Login
let btn = document.querySelector("#verSenhaLogin");
btn.addEventListener('click', ()=>{
    let inputSenha1 = document.querySelector("#senhaLogin");
    if(inputSenha1.getAttribute('type') == 'password'){
        inputSenha1.setAttribute('type', 'text');
    }else{
        inputSenha1.setAttribute('type', 'password');
    }
});