
//***for underline Animation***///


var marker = document.querySelector('#marker')
var angkor = document.querySelectorAll('nav .link')

function underline(e){

    marker.style.left = e.offsetLeft + "px"
    marker.style.width = e.offsetWidth + "px"
}

angkor.forEach(link =>{
    link.addEventListener('mouseover', (e)=>{
        underline(e.target)
    })
})

//***for Images Slider***///

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
