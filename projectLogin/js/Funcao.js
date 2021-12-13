//página Login
let btn = document.querySelector(".fa-eye");
btn.addEventListener('click', ()=>{
    let inputSenha1 = document.querySelector("#senhaLogin");
    if(inputSenha1.getAttribute('type') == 'password'){
        inputSenha1.setAttribute('type', 'text');
    }else{
        inputSenha1.setAttribute('type', 'password');
    }
});

//página Cadastrar
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