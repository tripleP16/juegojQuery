var imagenes = ["image/1.png", "image/2.png", "image/3.png", "image/4.png"];
var tablero = {
    "col1": [],
    "col2": [],
    "col3": [],
    "col4": [],
    "col5": [],
    "col6": [],
    "col7": []
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function crearImagen (){
    var imagen = document.createElement("img"); 
    imagen.src = imagenes [getRandomInt(0,3)];
    return imagen; 
}

function rellenarColumna1(){
    for (var  i =  0; i < 6; i++) {
        var imagen = crearImagen(); 
        tablero.col1.push(imagen.src); 
        $('.col-1').append(imagen); 
    }
}


$(document).ready(function(){
    var color = $('.main-titulo').css("color");
    setInterval(function(){
        setTimeout(function(){
            $('.main-titulo').css("color", color);
        },400); 
        setTimeout(function(){
            $('.main-titulo').css("color", "white");
        },1200);
        
    }, 500);
    rellenarColumna1();
    
});