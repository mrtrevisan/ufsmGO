

/*
var inputElement = document.getElementById("pontuacao");
var valorDaFuncao = getPoints();
inputElement.value = valorDaFuncao;
*/
var box = document.getElementsByClassName('entered-box');

function open_entered_box(){
    if (box[0].style.display == 'none'){
        box[0].style.display = 'block';
    }
}

function close_entered_box(){
    if (box[0].style.display == 'block'){
        box[0].style.display = 'none';
    }
}