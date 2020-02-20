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
function crearImagen (id){
    var imagen = document.createElement("img"); 
    imagen.src = imagenes [getRandomInt(0,3)];
    imagen.id = id;
   // console.log (imagen.id);
    return imagen; 
}

function columnasRelleno(columna, imagen){
    switch(columna){
        case 'col-1': tablero.col1.push(imagen);
                    return '2';
                        break;
        case 'col-2': tablero.col2.push(imagen);
                    return '1,3';
                        break;
        case 'col-3': tablero.col3.push(imagen);
                    return '2,4';
                        break;  
        case 'col-4': tablero.col4.push(imagen);
                    return '3,5';
                        break;  
        case 'col-5': tablero.col5.push(imagen);
                    return '4,6';
                        break;   
        case 'col-6': tablero.col6.push(imagen);
                    return '5,7';
                        break; 
        case 'col-7': tablero.col7.push(imagen);
                    return '6';
                        break;
    }

}



function rellenarColumna(columna){
    for (var i= 0; i < 6; i++) {
        var imagen = crearImagen(i.toString()+columna); 
        var obtenerAccept = columnasRelleno(columna, imagen);
        $('.'+columna).append(imagen);
        $('#'+imagen.id).draggable({
            containment: '.panel-tablero', 
            revert : true,
            
            revertDuration: 1000
        });

    
        
       

    }
}

var check =  false ;
function cronometro(valor, seg, min){
    var intervalo = setInterval(function(){
       if (seg == 0){
           seg = 59;
           min --;
       }else{
           seg --;
       }
       if (min == 0 && seg == 0){
           check = true; 
           $('.panel-tablero').fadeOut(1000);
           $('.main-titulo').text('Juego Terminado');
           $('.score').hide(500);
           $('.score').show(2000);
           $('.buttons').hide(500);
           $('.buttons').show(2000);
           $('.moves').hide(500);
           $('.moves').show(2000);
           $('.time').hide(1000);
           $('.moves').animate({
               width:'700px'
           },1000)
           $('.score').animate({
            width:'700px'
        },1000)
       }
       if (seg <10){
        valor = min.toString() + ':'+'0' + seg.toString();
       }else {
        valor = min.toString() + ':' + seg.toString(); 
         }
        $('#timer').text(valor);
    },1000);
   

}

function rellenarTablero(){
   rellenarColumna('col-1');
   rellenarColumna('col-2');
   rellenarColumna('col-3');
   rellenarColumna('col-4');
   rellenarColumna('col-5');
   rellenarColumna('col-6');
   rellenarColumna('col-7');
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
    
    $('.panel-tablero').hide();
    rellenarTablero();
    $('.panel-tablero').slideDown(1500, function(){
        
    });
    $('.btn-reinicio').click(function(){   
        cronometro("", 5,0);
        
        if ($(this).html() == 'Reiniciar'){
            location.reload(true);
        }
        $(this).html('Reiniciar');
    });

    
        
  
        
    
});