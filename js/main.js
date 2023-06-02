const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');


tabItem.forEach(function(element) {
    element.addEventListener('click', open);
})

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--activ');
    });

    tabTarget.classList.add('tabs__btn-item--activ');

    tabContent.forEach(function(item){
    item.classList.remove('tabs__content-item--activ');
    });

    document.querySelector(`#${button}`).classList.add
    (`tabs__content-item--activ`)
}


const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () =>{
   menu.classList.toggle('menu__list--activ')
});

const swiper = new Swiper(".swiper", {
    effect: "fade",
      pagination: {
        el: ".swiper-pagination",
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    });
