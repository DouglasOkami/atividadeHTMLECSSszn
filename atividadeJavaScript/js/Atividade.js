//tamanho font
function tFontT(){
    let font = document.getElementById("tFont").value;
    document.getElementById("tDiv").style.fontSize = `${font}px`;
}
//cor fonte
function vermelho(){
    document.getElementById("paragrafo").style.color = "red";
}

function verde(){
    document.getElementById("paragrafo").style.color = "green";
}

function cinza(){
    document.getElementById("paragrafo").style.color = "silver";
}

function laranja(){
    document.getElementById("paragrafo").style.color = "orange";
}

//cor background
function preto(){
    document.getElementById("tDiv").style.background = "black";
}

function amarelo(){
    document.getElementById("tDiv").style.background = "yellow";
}

function verdeMarinho(){
    document.getElementById("tDiv").style.background = "aqua";
}

function azul(){
    document.getElementById("tDiv").style.background = "blue";
}

//tamanho Div
function tDivT(){
    let divWidth = document.getElementById("tDivTexto").value;
    document.getElementById("tDiv").style.width = `${divWidth}`;
}
