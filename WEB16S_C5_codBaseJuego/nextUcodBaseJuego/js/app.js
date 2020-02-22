var imagenes = ["image/1.png", "image/2.png", "image/3.png", "image/4.png"];
var tablero = new Array(2); 
for (var i = 0; i<7; i++){
    tablero[i] = new Array(2);
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
    return imagen; 
}

function devolverAceptar (i,j){
    var aceptar  ;
    var aceptar2;
    if (j !=6){
        aceptar = '#' + tablero[i][j+1].id  ;
        }
        if (j!=0){
            aceptar += tablero[i][j-1].id ;
        }
        console.log(aceptar);
        aceptar2 = aceptar;
    return aceptar2;
}

function activarMovimiento(){
    
    for (var i = 0; i<7; i++){
        for (var j =0; j<7 ; j++){
            /*switch (i){
                case 0 :;
                            /*if (j!=6){
                                aceptar = '#' + tablero[i][j+1].id + ' , ';
                            }
                            if (j !=0){
                                aceptar = '#' + tablero[i][j-1].id
                            }
                            console.log('#'+tablero[i][j].id);

                            
                        break;
                case 1 : break;
                case 2 : break;
                case 3 : break;
                case 4 : break;
                case 5 : break;
                case 6 : break;
            }*/
            var aceptar = devolverAceptar(i,j);
            $('#'+tablero[i][j].id).droppable({
                accept: aceptar,
                drop: function(){
                    alert("Hola");
                }
            });
        }
    }
}

function rellenarTablero(){
    var imagen ;
   
    for (var i = 0; i < 7; i++){
        for (var j = 0 ; j<7 ; j++){
            switch(i){
                case 0: imagen = crearImagen('a'+i.toString() + j.toString());
                        tablero[i][j] = imagen;
                        $('.col-1').append(tablero[i][j]);  
                        break;
                case 1: imagen = crearImagen(i.toString() + j.toString()+'b');
                        tablero[i][j] = imagen;
                        $('.col-2').append(tablero[i][j]);   
                        break;
                case 2: imagen = crearImagen(i.toString() + j.toString()+'c');
                        tablero[i][j] = imagen;
                        $('.col-3').append(tablero[i][j]);  
                        break;
                case 3: imagen = crearImagen(i.toString() + j.toString()+'d');
                        tablero[i][j] = imagen;
                        $('.col-4').append(tablero[i][j]); 
                        break;
                case 4: imagen = crearImagen(i.toString() + j.toString()+'e');
                        tablero[i][j] = imagen;
                        $('.col-5').append(tablero[i][j]);  
                        break;
                case 5: imagen = crearImagen(i.toString() + j.toString()+'f');
                        tablero[i][j] = imagen;
                        $('.col-6').append(tablero[i][j]);  
                        break;
                case 6: imagen = crearImagen(i.toString() + j.toString()+'g');
                        tablero[i][j] = imagen;
                        $('.col-7').append(tablero[i][j]);   
                        break;
            }
            
        }
    }

    $('.panel-tablero').children().children().draggable({
        containment : '.panel-tablero',
        revert : true
    })

    activarMovimiento();
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
        },1000);
        clearInterval(intervalo);
       }
       if (seg <10){
        valor = min.toString() + ':'+'0' + seg.toString();
       }else {
        valor = min.toString() + ':' + seg.toString(); 
         }
        $('#timer').text(valor);
    },1000);
   

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
   // rellenarTablero();
    $('.panel-tablero').slideDown(1500, function(){
        
    });
    $('.btn-reinicio').click(function(){   
        cronometro("", 0,2);
        
        if ($(this).html() == 'Reiniciar'){
            location.reload(true);
        }
        $(this).html('Reiniciar');
    });

    rellenarTablero();

    
        
  
        
    
});