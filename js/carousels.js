const today = document.querySelector('#carousel-today');
const like = document.querySelector('#carousel-like');


function Carousel(carouselID){
    let countSlide = 0;
    const productID = carouselID.getAttribute('data-product');
    const slide = carouselID.getAttribute('data-slide');

    const layout = `<button type="button" onClick='onNext(${carouselID.getAttribute('data-product')}, ${countSlide}, ${slide})' class="my-carousel__indicator-next"><i class="fa-solid fa-angle-right"></i></button>
                    <button type="button" onClick='onPrev(${carouselID.getAttribute('data-product')}, ${countSlide})' class="my-carousel__indicator-prev"><i class="fa-solid fa-angle-left"></i></button>
                    <div class="my-carousel__list" data-list="carousel__list"></div>`
    // выдает class для карусели чтоб подключить остальные стили по методологии BEM
    carouselID.classList.add('my-carousel');
    // присоединяет кнопки передвижение и добавляет видимый интерфейс на странице
    carouselID.innerHTML = layout;

    const carouselList = document.querySelector(`#carousel-${productID} [data-list = carousel__list]`);

    // фильтрует продукт по каруселям
    let filteredProducts = products.filter(product => product.carousel[productID]);

    // вставляет в каждую карусель продукт в виде карточки товара
    filteredProducts.forEach((product)=>{
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
            </div>`         
        
    })
    // выясняет размер экрана и количество карточек товара в видимой области
    let items = carouselID.querySelectorAll('.my-carousel__item');
    
    items.forEach((item)=>{
        // прописывает ширину карточки товара 
        // взависимости сколько карточек должно быть в видимой области
        // размер карусели разделить на слайды в видимой области

        item.style.width = carouselID.offsetWidth / slide + "px";
    })
    // после определения размеров карточки находим точный размер карточки
    // и определяем какая должна быть ширина общего размера карусели
    // со всеми товарами(включая не видимую область)
    let itemWidth = carouselID.querySelector('.my-carousel__item').offsetWidth;
    carouselList.style.width = products.length*itemWidth+"px"
}

// работа кнопок вперед назад

function onNext(carouselID, countSlide, slide){

    // находим название карусели
    let carouselName = carouselID.getAttribute('data-product');

    // подставляем название карусели в поиск селектора
    let list = document.querySelector(`#carousel-${carouselName} [data-list = carousel__list]`);
    let item = carouselID.querySelector('.my-carousel__item');
    let filteredProducts = products.filter(product => product.carousel[carouselName]);

    // прибавляем значение к клику в данном случае +1
    if(countSlide < (filteredProducts.length-slide)){
        countSlide++;
        
    }
    console.log(countSlide+" < " + filteredProducts.length+"-"+slide);
    
    // прописываем движение в сторону на размер одной карточки товара
    list.style.transform = `translate(-${item.offsetWidth*countSlide}px)`;
}
function onPrev(carouselID, countSlide){
    let carouselName = carouselID.getAttribute('data-product');
    let list = document.querySelector(`#carousel-${carouselName} [data-list = carousel__list]`);
    let item = carouselID.querySelector('.my-carousel__item');

    if(countSlide > 0 ){
        countSlide--;
    }
    list.style.transform = `translate(-${item.offsetWidth*countSlide}px)`;
}




Carousel(today);
Carousel(like);