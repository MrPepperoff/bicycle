// использует bootstrap5
const bigCarousel = document.querySelector("#big-carousel");


bigCarousel.innerHTML=`
    <div id="carouselProduct" class="carousel slide row" data-bs-ride="carousel">
        <div class='col-3 big-carousel__left'>
            <div class='row mini big-carousel__mini-card__list' id='mini-cards'>
                
            </div>
        </div>
        <div class='col-9 big-carousel__right'>
        <div class='carousel-inner' id='cards'>
        
        </div>
        <button class="carousel-control-prev big-carousel__button" type="button" data-bs-target="#big-carousel" data-bs-slide="prev">
            <i class="fa-solid fa-angle-left big-carousel__icon"></i>
            <span>Предыдущий</span>
        </button>
        <button class="carousel-control-next big-carousel__button" type="button" data-bs-target="#big-carousel" data-bs-slide="next">
            <span>Следующий</span>
            <i class="fa-solid fa-angle-right big-carousel__icon"></i>
        </button>  
        </div>  
            
    </div>
`;
let Cards = products.filter(product => product.carousel.week);
let mini = bigCarousel.querySelector('#mini-cards');
let normal = bigCarousel.querySelector('#cards');

let count = 0;
Cards.forEach((product)=>{
    mini.innerHTML +=
    `<div class='col-12 big-carousel__mini-card__item'>
        <button type="button" data-bs-target="#carouselProduct" data-bs-slide-to="${count}" aria-label="Slide ${count}" class="big-carousel__mini-card mini-card">
            <div class="mini-card__img">
                    <img src="images/products/${product.images[0]}">
            </div>
            <div class="mini-card__context">
                <h3 class="mini-card__title">${product.title}</h3>
                ${(product.old_price)?`<p class="mini-card__price-old">${product.old_price} &#8381;</span>` :''}
                <p class="mini-card__price">${product.price} &#8381;</p>
                <div class="star row" data-count="${product.rating}"></div>
            </div>
        </button>
    </div>`;
    
    normal.innerHTML += `
    <div class="carousel-item big-carousel__item">
        <div class="big-carousel__card card">
            <div class="card__img-wrap">
                <img src="images/products/${product.images[0]}" class="card__img" alt="${product.title}">
            </div>
            <div class="card-body big-carousel__body">
                <h3 class="card-title card__title">${product.title}</h3>
                ${(product.old_price)?`<div class="card__price-old">${product.old_price} &#8381;</div>`:''}
                <div class="card__price">${product.price} &#8381;</div>
                <div class="star row" data-count="${product.rating}"></div>
                <p class="card-text card__text">
                    ${product.description}
                </p>
                
                <button href="#" class="btn btn-danger">Добавить в карзину</button>
            </div>
        </div>
    </div>`;
    count++;
    console.log(count)
})

let active = document.querySelector('.big-carousel__item');
active.classList.add('active');
console.log(active);
