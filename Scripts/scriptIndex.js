// Colocando uma janela de popup no botão de adicionar ao carrinho

function carrinho() {
    window.alert("Produto adicionado no carrinho!");
}

function telefone() {
    window.alert("Telefone da loja: (19) 98765-4321. Bom atendimento!")
}

// Fim da função de popup no botão de adicionar ao carrinho

//Funções do carrossel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += " active";
}