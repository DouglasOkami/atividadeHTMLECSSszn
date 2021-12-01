function tFontT(){
    let font = document.getElementById("tFont").value;
    document.getElementById("paragrafo").style.fontSize = `${font}px`;
}

function vermelho(){
    document.getElementById("paragrafo").style.color = "red";
}

function verde(){
    document.getElementById("paragrafo").style.color = "green";
}

function preto(){
    document.getElementById("paragrafo").style.background = "black";
}

function amarelo(){
    document.getElementById("paragrafo").style.background = "yellow";
}

function tDivT(){
    let divWidth = document.getElementById("tDivTexto").value;
    document.getElementById("tDiv").style.width = `${divWidth}`;
}
