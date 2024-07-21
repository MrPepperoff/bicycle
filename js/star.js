// let stars = document.querySelectorAll('.star');
// stars.forEach(star => {
//     let count = star.getAttribute('data-count');
//     let j =true;
//     for(let i=5; i > 0; i--){
//         if(count%2 == 0 && count != 0){
//             star.innerHTML +='<i class="fa-solid fa-star"></i>'
//             count-=2
//         }
//         if(count <= 0){
//             star.innerHTML +='<i class="fa-regular fa-star"></i>'
//         }
//         // if(count%2==1){
//         //     star.innerHTML +='<div class="star__clay"><i class="fa-solid fa-star-half"></i><i class="fa-regular fa-star-half fa-flip-horizontal"></i></div>'
//         // }
        
//     }
// });

let stars = document.querySelectorAll('.star');
stars.forEach(star => {
    let count = star.getAttribute('data-count');
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