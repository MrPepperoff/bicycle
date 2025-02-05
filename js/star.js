let stars = document.querySelectorAll('.star');
stars.forEach(star => {
    let count = star.getAttribute('data-count');

    star.setAttribute('title',count+"/10 рейтинг")
    star.innerHTML = '';
    for(let i=0; i < 5; i++){
        
        if(count >= 2){
            star.innerHTML +='<i class="fa-solid fa-star col-2"></i>';
            count -= 2;
        } else if(count == 1){
            star.innerHTML +='<div class="star__clay col-2"><i class="fa-solid fa-star-half"></i><i class="fa-regular fa-star-half fa-flip-horizontal"></i></div>';
            count -= 1;
        } else {
            star.innerHTML +='<i class="fa-regular fa-star col-2"></i>';
        }
    }
});