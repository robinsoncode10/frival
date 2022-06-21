

var owl = $('.owl-carousel');
$('#owl1').owlCarousel({
    items:1,
    loop:true,
    margin:3,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:false,
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[8000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

$('#owl2').owlCarousel({
    items:5,
    loop:true,
    margin:4,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true,
        },
        600:{
            items:3,
            nav:false,
            loop:true,
        },
        1000:{
            items:5,
            nav:false,
            loop:true,
        }
    }

    
});
$('#owl3').owlCarousel({
    items:5,
    loop:true,
    margin:4,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true,
        },
        600:{
            items:3,
            nav:false,
            loop:true,
        },
        1000:{
            items:5,
            nav:false,
            loop:true,
        }
    }

    
});


let animado = document.querySelectorAll('.animado');

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (screen.width < 1023){
            if (alturaAnimado - 1200 < scrollTop){
                animado[i].style.opacity = 1;
                animado[i].classList.add('mostrarArriba');
            }
        }
        else {
            if (alturaAnimado - 800 < scrollTop){
                animado[i].style.opacity = 1;
                animado[i].classList.add('mostrarArriba');
            }
        }
        
       
    }
}
window.addEventListener('scroll', mostrarScroll);

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

    function mostrar_menu(){

        nav.style.right = "0px";
        background_menu.style.display = "block";
    }
    
    function ocultar_menu(){
    
        nav.style.right = "-40rem";
        background_menu.style.display = "none";
    }


