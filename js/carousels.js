const today = document.querySelector('#carousel-today');


function Carousel(carouselID){

    let slide = carouselID.getAttribute('data-slide');
    carouselID.classList.add('my-carousel');

    const layout = `
    <button type="button" onClick='onNext(${slide})' class="my-carousel__indicator-next"><i class="fa-solid fa-angle-right"></i></button>
    <button type="button" onClick='onPrev()' class="my-carousel__indicator-prev"><i class="fa-solid fa-angle-left"></i></button>
    <div class="my-carousel__list my-carousel__list__count-slide-${slide}" id="carousel__list" >
        
    </div>`
    carouselID.innerHTML = layout
    const carouselList = document.querySelector('#carousel__list');

    products.forEach((product)=>{
        carouselList.innerHTML += 
        `<div class="my-carousel__item">
            <a href='#' class="my-carousel__card my-card">
                <div class="my-card__img__wrap">
                    <img src="images/products/${product.images[0]}" class="my-card__img" alt="${product.title}">
                    <div class="my-card__user">
                        <button type="button" title="Сравнить"><i class="fa-solid fa-repeat"></i></button>
                        <button type="button" title="Избранное"><i class="fa-regular fa-heart"></i></button>
                        <button type="button" title="В карзину">В карзину</button>
                    </div>
                </div>
                <div class="my-card__context">
                    <h3 class="my-card__title">${product.title}</h3>
                    ${(product.old_price != null)?`<p class="my-card__price__old">${product.old_price} &#8381;</p>`: ''}
                    <p class="my-card__price">${product.price} &#8381;</p>
                    <div class="star row my-card__star" data-count="${product.rating}"></div>
                </div>
            </a>
        </div>`;
        
    })
    let items = document.querySelectorAll('.my-carousel__item');
    

    items.forEach((item)=>{
        item.style.width = carouselID.offsetWidth / slide+"px";
    })

    let itemWidth = document.querySelector('.my-carousel__item').offsetWidth;
    carouselList.style.width = products.length*itemWidth+"px"
}


let countSlide = 0;
function onNext(slide){
    
    let list = document.querySelector('#carousel__list');
    let item = document.querySelector('.my-carousel__item');
    if(countSlide < (products.length-slide)){
        countSlide +=1;
    }
    
    list.style.transform = `translate(-${item.offsetWidth*countSlide}px)`;
}
function onPrev(){
    let list = document.querySelector('#carousel__list');
    let item = document.querySelector('.my-carousel__item');

    if(countSlide > 0 ){
        countSlide -=1;
    }
    list.style.transform = `translate(-${item.offsetWidth*countSlide}px)`;
}




Carousel(today);