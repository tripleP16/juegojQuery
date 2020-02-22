var imagenes = ["image/1.png", "image/2.png", "image/3.png", "image/4.png"];
var tablero = new Array(2); 
for (var i = 0; i<7; i++){
    tablero[i] = new Array(2);
}
var seleccionada ;

var movimientos = 0; 



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
    var aceptar  = "#10b";
        switch (i){
            case 0: switch (j){
                    case 0 : aceptar = '#' + tablero[i][j+1].id + ' , ' + '#' + tablero[i+1][j].id;
                            break;
                    case 1 :
                    case 2:
                    case 3: 
                    case 4: 
                    case 5:  aceptar = '#' + tablero[i][j+1].id + ' , '+ '#' + tablero[i+1][j].id + ' , ' + '#' + tablero[i][j-1].id +' '; 
                            break;
                    case 6 : aceptar = '#' + tablero[i][j-1].id + ' , ' + '#' + tablero[i+1][j].id;
                            break;

                    }
                    break;
            case 1: 
            case 2:
            case 3: 
            case 4: 
            case 5: switch(j){
                case 0 : aceptar = '#' + tablero[i][j+1].id + ' , ' + '#' + tablero[i+1][j].id + ' , ' + '#' + tablero[i-1][j].id;
                        break;
                case 1:
                case 2: 
                case 3:
                case 4:
                case 5: aceptar = '#' + tablero[i][j+1].id + ' , ' + '#' + tablero[i+1][j].id + ' , ' + '#' + tablero[i-1][j].id + ' , ' + '#' + tablero[i][j-1].id;
                        break; 
                case 6:aceptar = '#' + tablero[i][j-1].id + ' , ' + '#' + tablero[i+1][j].id + ' , ' + '#' + tablero[i-1][j].id;
                        break;

                }
                break;
            case 6: switch (j){
                case 0 : aceptar = '#' + tablero[i][j+1].id + ' , ' + '#' + tablero[i-1][j].id;
                        break;
                case 1 :
                case 2:
                case 3: 
                case 4: 
                case 5:  aceptar = '#' + tablero[i][j+1].id + ' , '+ '#' + tablero[i-1][j].id + ' , ' + '#' + tablero[i][j-1].id +' '; 
                        break;
                case 6 : aceptar = '#' + tablero[i][j-1].id + ' , ' + '#' + tablero[i-1][j].id;
                        break;

                }
                break;
        }

        //console.log(aceptar);

    return aceptar;
}
function imprimirMovimiento(){
    $('#movimientos-text').text(movimientos);
}

function cambio (id){
    var cambiazo = $('#'+ seleccionada).attr('src');
    var cambiazo2 = $('#'+ id).attr('src');
    $('#'+ id).attr('src', cambiazo);
    $('#'+ seleccionada).attr('src', cambiazo2);
    movimientos ++ ; 
    imprimirMovimiento();

}

function activarMovimiento(){
    
    for (var i = 0; i<7; i++){
        for (var j =0; j<7 ; j++){
            var aceptar = devolverAceptar(i,j);
            $('#'+tablero[i][j].id).droppable({
                accept: aceptar,
                drop: function(event, ui){
                    cambio($(this).attr('id'));
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
    seleccionar();
    

    
}

function seleccionar (){
    $(document).ready(function(){
        $('body').on('drag', 'img', function(){
          seleccionada = $(this).attr('id');
        })
      })
     
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
        activarMovimiento();
        
        if ($(this).html() == 'Reiniciar'){
            location.reload(true);
        }
        $(this).html('Reiniciar');
    });

    rellenarTablero();

    
        
  
        
    
});