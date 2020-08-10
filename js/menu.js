var menu=document.getElementById('menu')
var altura=menu.offsetTop;
window.addEventListener('scroll', function()
{
    if(window.pageYOffset>altura){
    menu.classList.add('fixed')
    }else{
    menu.classList.remove('fixed')
    }
})

//creacion de variables
var imagenes=$('.slider li').length;//numero de imagenes en el slider
var imgPost=1;
var imgPrevPost=4;

//console.log(imagenes);
//ciclo repetitivo For
for(i=1; i<=imagenes;i++){
    $('.pagina').append('<li><span class="fas fa-circle"></span></li>');
    
}

$('.slider li').hide();//ocultar todos los slider
$('.slider li:first').show(); //mostrar el primer slider

//Asignar el color al icono
$('.pagina li:first').css({'color':'#CD6E2E'});
//crear funciones
$('.pagina li').click(pagina);
$('.right span').click(nextSlider);
$('.left span').click(prevSlider);

//MOSTRAR En forma automatica
setInterval (function(){
    nextSlider();
}, 5000);


function pagina(){
    var paginaPost=$(this).index()+1;
  //  console.log(paginaPost);
    $('.slider li').hide();//ocultar todos los slider
    $('.slider li:nth-child('+paginaPost+')').fadeIn(); //mostrar el numero de imagen seleccionado
    $('.pagina li').css({'color':'#858585'});
    $(this).css({'color':'#CD6E2E'});
}

function nextSlider(){
    if(imgPost>=imagenes){
        imgPost=1;
    }else{
        imgPost++;
    }

    //color del icono
    $('.pagina li').css({'color':'#858585'});
    $('.pagina li:nth-child('+imgPost+')').css({'color':'#CD6E2E'});

    //console.log(imgPost);
    $('.slider li').hide();//ocultar todos los slider
    $('.slider li:nth-child('+imgPost+')').fadeIn(); //mostrar en numero de imagen
}
/**/
function prevSlider(){imgPost
    if(imgPost>=imgPrevPost){
        imgPrevPost=3;
    }else{
        imgPrevPost=imgPrevPost-1;
    }

    //color del icono
    $('.pagina li').css({'color':'#858585'});
    $('.pagina li:nth-child('+imgPrevPost+')').css({'color':'#CD6E2E'});

    //console.log(imgPost);
    $('.slider li').hide();//ocultar todos los slider
    $('.slider li:nth-child('+imgPrevPost+')').fadeIn(); //mostrar en numero de imagen

} 